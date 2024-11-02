import { Between, Column, DataSource, MoreThanOrEqual, PrimaryGeneratedColumn } from 'typeorm';
import { PreCommonTag } from '../import/entities/PreCommonTag.js';
import { PreForumThread } from '../import/entities/PreForumThread.js';
import { PreCommonTagitem } from '../import/entities/PreCommonTagitem.js';
import { PreForumPost } from '../import/entities/PreForumPost.js';
import autoGroupStrings from 'auto-group-strings-array';
import * as _ from 'lodash-es';
// @ts-ignore
import { longestCommonInfix } from 'extra-string';
import { normalize } from './uitls';
import { series } from './series';
import { agnes } from 'ml-hclust';
import { forEach } from 'lodash-es';
import fs from 'node:fs';
import { PreForumCollection } from '../import/entities/PreForumCollection';
import { PreForumCollectionthread } from '../import/entities/PreForumCollectionthread';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

(async function main() {
  const dataSource = new DataSource({
    type: 'mysql',
    url: process.env.TYPEORM_URL,
    entities: [PreCommonTag, PreForumThread, PreCommonTagitem, PreForumPost, PreForumCollection, PreForumCollectionthread], // logging: true,
  });
  await dataSource.initialize();

  const tags = await dataSource.manager.find(PreCommonTag);
  const tagId = Object.fromEntries(tags.map((t) => [t.tagname, t.tagid]));

  // const 男憋tids1 = (await dataSource.manager.findBy(PreCommonTagitem, { tagid: tagId['男憋'], idtype: 'tid' })).map((t) => t.itemid);
  // const 女憋tids1 = (await dataSource.manager.findBy(PreCommonTagitem, { tagid: tagId['女憋'], idtype: 'tid' })).map((t) => t.itemid);
  // const 男憋tids2 = _.difference(男憋tids1, 女憋tids1);
  // const 女憋tids2 = _.difference(女憋tids1, 男憋tids1);
  // const result: string[][] = [[], []];
  //
  // for (const [index, tids] of [男憋tids2, 女憋tids2].entries()) {
  //   for (const thread of await dataSource.manager.findBy(PreForumThread, { tid: In(tids) })) {
  //     const posts = await dataSource.manager.findBy(PreForumPost, { tid: thread.tid, authorid: thread.authorid });
  //     const messages = posts
  //       .filter((p) => !/\[quote]\[color=#999999]\S+ 发表于 [\d\- :]+\[\/color]\n\[color=#999999]/.test(p.message))
  //       .map((p) => strip([p.subject, p.message.replace(/\[i=s] 本帖最后由 \S+ 于 [\d\- :]+ 编辑 \[\/i]/, '')].join('\n')))
  //       .filter((m) => m.length >= 300);
  //
  //     if (!messages.length) continue;
  //     const full = messages.join('\n');
  //     result[index].push(full);
  //   }
  // }
  // fs.writeFileSync('data.json', JSON.stringify(result));
  // process.exit();
  // return;
  let pass = 0;
  let fail = 0;

  const records: {
    tid: number;
    name: string;
    author: string;
    ignore: number;
  }[] = parse(await fs.promises.readFile('series.csv'), {
    columns: true,
    skip_empty_lines: true,
    cast: true,
  });

  const threads2 = await dataSource.manager.find(PreForumThread, {
    where: { typeid: 21, displayorder: MoreThanOrEqual(0), dateline: Between(0, 1730371035) },
    order: { dateline: 'ASC' },
  });

  const ignore = records.filter((r) => r.ignore).map((r) => r.tid);
  const forum_collections = await dataSource.manager.find(PreForumCollection);
  const forum_collectionthreads = await dataSource.manager.find(PreForumCollectionthread);

  const result: { tid: number; subject: string; name: string; author: string }[] = [];
  let fullScore = 0;
  let score = 0;
  for (const [uid, threads3] of Map.groupBy(threads2, ({ authorid }) => authorid)
    .entries()
    .filter(([, t]) => t.length >= 2)
    .take(100)
    .toArray()
    .sort(([a], [b]) => a - b)) {
    const threads4 = threads3.filter((t) => !ignore.includes(t.tid));
    if (threads4.length < 2) continue;

    const r = await series(threads4);
    const currentCollections = forum_collections
      .filter((c) => c.uid == uid)
      .map(c => _.difference(forum_collectionthreads
        .filter((ct) => ct.ctid == c.ctid)
        .map((ct) => ct.tid), ignore))
      .filter(ts => ts.length >= 2);

    let currentFullScore = currentCollections.length;
    let currentStore = 0;
    for (const [s, ts] of Object.entries(r)) {
      if (currentCollections.some((c) => _.isEqual(c, ts.map((t) => t.tid)))) {
        console.log(`all correct ${s}`);
        // 存在全部正确的一组，得一分
        currentStore++;
      } else if (_.intersection(ts.map((t) => t.tid), currentCollections.flat()).length === 0) {
        // 存在全部错误的一组，倒扣一分
        console.log(`all wrong ${s}`);
        currentStore--;
      } else {
        console.log(`partial ${s}`);
      }
    }

    fullScore += currentFullScore;
    score += currentStore;
    console.log(score / fullScore);

    const index = Object.fromEntries(Object.entries(r).flatMap(([s, t]) => t.map((t2) => [t2.tid, s] as const)));
    for (const [thread, name] of threads4.map((t) => [t, index[t.tid] ?? ''] as const)) {
      result.push({ tid: thread.tid, subject: thread.subject, name, author: thread.author });
      if (currentStore != currentFullScore) console.log(`${thread.subject}\t\t${name}`);
    }
  }

  await fs.promises.writeFile('1.csv', stringify(result, { header: true }));

  // import csv to database
  // const collab = {
  //   '激"忍"档案': 19105,
  //   干净女孩的肮脏事: 1441,
  //   '小女孩憋尿的痛苦经历 第四部[外传]': 4863,
  //   绝望憋尿学校: 333,
  //   小夜猫小小说系列: 1441,
  //   '呐、来自恶魔的诅咒': 8688,
  // };
  //
  // const collections = Object.groupBy(
  //   records.filter((r) => r.name),
  //   (r) => (r.name in collab ? r.name : `${r.author}.${r.name}`),
  // ) as Record<
  //   string,
  //   {
  //     tid: number;
  //     name: string;
  //     author: string;
  //   }[]
  // >;
  //
  // await dataSource.manager.transaction(async (manager) => {
  //   await manager.getRepository(PreForumCollection).clear();
  //   await manager.getRepository(PreForumCollection).insert(
  //     Object.values(collections).map(([collection], i) => {
  //       const object = new PreForumCollection();
  //       object.ctid = i + 1;
  //       object.uid = collab[collection.name as keyof typeof collab] ?? threads2.find((t) => t.tid == collection.tid)!.authorid;
  //       object.name = collection.name;
  //       object.desc = '系统自动生成的合集';
  //       return object;
  //     }),
  //   );
  //   await manager.getRepository(PreForumCollectionthread).clear();
  //   await manager.getRepository(PreForumCollectionthread).insert(
  //     Object.values(collections).flatMap((c, i) =>
  //       c.map((collection) => {
  //         const object = new PreForumCollectionthread();
  //         object.ctid = i + 1;
  //         object.tid = collection.tid;
  //         return object;
  //       }),
  //     ),
  //   );
  //   await manager.query(`UPDATE pre_forum_collection c SET
  //     username = (SELECT t.author FROM pre_forum_thread t WHERE t.tid = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid)),
  //     dateline = (SELECT MIN(t.dateline) FROM pre_forum_collectionthread ct INNER JOIN pre_forum_thread t USING(tid) WHERE ct.ctid = c.ctid),
  //     threadnum = (SELECT COUNT(*) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid),
  //     lastpost = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid),
  //     lastupdate = (SELECT t.dateline FROM pre_forum_thread t WHERE t.tid = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid)),
  //     lastsubject = (SELECT t.subject FROM pre_forum_thread t WHERE t.tid = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid)),
  //     lastposttime = (SELECT t.dateline FROM pre_forum_thread t WHERE t.tid = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid)),
  //     lastposter = (SELECT t.author FROM pre_forum_thread t WHERE t.tid = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid)),
  //     lastvisit = (SELECT t.dateline FROM pre_forum_thread t WHERE t.tid = (SELECT MAX(tid) FROM pre_forum_collectionthread ct WHERE ct.ctid = c.ctid)),
  //     keyword = (SELECT COALESCE(GROUP_CONCAT(DISTINCT ta.tagname),'')
  //     FROM pre_forum_collectionthread ct
  //     INNER JOIN pre_common_tagitem ti ON ti.itemid = ct.tid
  //     INNER JOIN pre_common_tag ta USING(tagid)
  //     WHERE ti.idtype = 'tid' AND ct.ctid = c.ctid)`);
  //
  //   await manager.query(`UPDATE pre_forum_collectionthread ct SET
  //     ct.dateline = (SELECT t.dateline FROM pre_forum_thread t WHERE t.tid = ct.tid)`);
  //
  //   await manager.query(`TRUNCATE TABLE pre_forum_collectionrelated`);
  //   await manager.query(`INSERT INTO pre_forum_collectionrelated (tid, collection) SELECT tid, ctid AS collection FROM pre_forum_collectionthread`)
  // });

  // tagging
  // const threads = (await dataSource.manager.find(PreForumThread, {
  //   where: { typeid: 21, displayorder: MoreThanOrEqual(0), dateline: Between(1658826253, 1711039295) },
  //   order: { dateline: 'DESC' }
  //   // where: { tid: In([263564,264427,263219]) },
  //   // skip: 10,
  //   // take: 110
  // }));
  //
  // console.log(`load ${threads.length} threads`);
  //
  // for (const thread of threads) {
  //   // const tagItems = await dataSource.manager.findBy(PreCommonTagitem, { idtype: 'tid', itemid: thread.tid });
  //   // if (tagItems.length) continue;
  //   // if (![264871, 264907, 265105].includes(thread.tid)) continue;
  //   // if (thread.tid != 264427) continue;
  //   const posts = await dataSource.manager.findBy(PreForumPost, { tid: thread.tid, authorid: thread.authorid });
  //   const messages = posts
  //     .filter((p) => !/\[quote]\[color=#999999]\S+ 发表于 [\d\- :]+\[\/color]\n\[color=#999999]/.test(p.message))
  //     .map((p) => strip([p.subject, p.message.replace(/\[i=s] 本帖最后由 \S+ 于 [\d\- :]+ 编辑 \[\/i]/, '')].join('\n')))
  //     .filter((m) => m.length >= 300);
  //
  //   if (!messages.length) continue;
  //
  //   const tagstr = posts.find((p) => p.first)?.tags;
  //   if (tagstr === undefined) continue;
  //
  //   const oldTags = tagstr
  //     .trimEnd()
  //     .split('\t')
  //     .map((t) => t.split(',', 2)[1])
  //     .filter((t) => t)
  //     .sort();
  //
  //   const full = messages.join('\n');
  //   const [tags, info] = await doTag(full, thread.subject);
  //   const newTags = tags.sort();
  //   const newTagStr = newTags.join(',');
  //
  //   if (_.isEqual(oldTags, newTags)) {
  //     pass++;
  //     console.log(`${pass / (pass + fail)}`);
  //     continue;
  //   }
  //   fail++;
  //
  //   console.log(thread.subject);
  //   console.log(`https://www.shireyishunjian.com/main/forum.php?mod=viewthread&tid=${thread.tid}&authorid=${thread.authorid}`);
  //   console.log(`${oldTags.join(',')}=>${newTagStr}`);
  //   console.log(`${pass / (pass + fail)}`);
  //   console.log(info);
  //   console.log('');
  //
  //   // const url = new URL('https://www.shireyishunjian.com/main/forum.php');
  //   // for (const [key, value] of Object.entries({
  //   //   mod: 'tag',
  //   //   op: 'set',
  //   //   inajax: 1,
  //   //   tags: newTagStr,
  //   //   tid: thread.tid,
  //   //   uid: 343513,
  //   //   formhash: 'tgapi',
  //   // })) {
  //   //   url.searchParams.set(key, value.toString());
  //   // }
  //   // const response = await fetch(url.href);
  //   // const text = await response.text();
  //   // assert.ok(response.ok && text.includes('<root>'));
  //
  //   // break;
  // }
  console.log('all done');
  process.exit();
})();
