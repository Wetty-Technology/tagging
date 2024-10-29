import { strip } from './bbcode.js';
import { doTag, lastResponse } from './tag.js';
import { Between, DataSource, MoreThanOrEqual } from 'typeorm';
import { PreCommonTag } from '../import/entities/PreCommonTag.js';
import { PreForumThread } from '../import/entities/PreForumThread.js';
import { PreCommonTagitem } from '../import/entities/PreCommonTagitem.js';
import { PreForumPost } from '../import/entities/PreForumPost.js';
import * as _ from 'lodash-es';

(async function main() {
  const dataSource = new DataSource({
    type: 'mysql',
    url: process.env.TYPEORM_URL,
    entities: [PreCommonTag, PreForumThread, PreCommonTagitem, PreForumPost] // logging: true,
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

  const threads = (await dataSource.manager.find(PreForumThread, {
    where: { typeid: 21, displayorder: MoreThanOrEqual(0), dateline: Between(1658826253, 1711039295) },
    order: { dateline: 'DESC' },
    // where: { tid: 265273 },
    skip: 10,
    take: 100
  }));

  console.log(`load ${threads.length} threads`);

  for (const thread of threads) {
    // const tagItems = await dataSource.manager.findBy(PreCommonTagitem, { idtype: 'tid', itemid: thread.tid });
    // if (tagItems.length) continue;
    // if (![264871, 264907, 265105].includes(thread.tid)) continue;
    // if (thread.tid != 264427) continue;
    const posts = await dataSource.manager.findBy(PreForumPost, { tid: thread.tid, authorid: thread.authorid });
    const messages = posts
      .filter((p) => !/\[quote]\[color=#999999]\S+ 发表于 [\d\- :]+\[\/color]\n\[color=#999999]/.test(p.message))
      .map((p) => strip([p.subject, p.message.replace(/\[i=s] 本帖最后由 \S+ 于 [\d\- :]+ 编辑 \[\/i]/, '')].join('\n')))
      .filter((m) => m.length >= 300);

    if (!messages.length) continue;

    const tagstr = posts.find((p) => p.first)?.tags;
    const oldTags = tagstr
      .trimEnd()
      .split('\t')
      .map((t) => t.split(',', 2)[1])
      .filter((t) => t)
      .sort();

    const full = messages.join('\n');
    const newTags = (await doTag(full, thread.subject)).sort();
    const newTagStr = newTags.join(',');

    if (_.isEqual(oldTags, newTags)) {
      pass++;
      console.log(`${pass / (pass + fail)}`);
      continue;
    }
    fail++;

    console.log(thread.subject);
    console.log(`https://www.shireyishunjian.com/main/forum.php?mod=viewthread&tid=${thread.tid}&authorid=${thread.authorid}`);
    console.log(`${oldTags.join(',')}=>${newTagStr}`);
    console.log(`${pass / (pass + fail)}`);
    console.log(lastResponse);

    // const url = new URL('https://www.shireyishunjian.com/main/forum.php');
    // for (const [key, value] of Object.entries({
    //   mod: 'tag',
    //   op: 'set',
    //   inajax: 1,
    //   tags: newTagStr,
    //   tid: thread.tid,
    //   uid: 343513,
    //   formhash: 'tgapi',
    // })) {
    //   url.searchParams.set(key, value.toString());
    // }
    // const response = await fetch(url.href);
    // const text = await response.text();
    // assert.ok(response.ok && text.includes('<root>'));

    // break;
  }
  console.log('all done');
  process.exit();
})();
