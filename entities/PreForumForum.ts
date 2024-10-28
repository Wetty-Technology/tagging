import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('forum', ['status', 'type', 'displayorder'], {})
@Index('fup_type', ['fup', 'type', 'displayorder'], {})
@Index('fup', ['fup'], {})
@Entity('pre_forum_forum')
export class PreForumForum {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'fid', unsigned: true })
  fid: number;

  @Column('mediumint', { name: 'fup', unsigned: true, default: () => "'0'" })
  fup: number;

  @Column('enum', {
    name: 'type',
    enum: ['group', 'forum', 'sub'],
    default: () => "'forum'",
  })
  type: 'group' | 'forum' | 'sub';

  @Column('char', { name: 'name', length: 50 })
  name: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('smallint', { name: 'styleid', unsigned: true, default: () => "'0'" })
  styleid: number;

  @Column('mediumint', {
    name: 'threads',
    unsigned: true,
    default: () => "'0'",
  })
  threads: number;

  @Column('mediumint', { name: 'posts', unsigned: true, default: () => "'0'" })
  posts: number;

  @Column('mediumint', {
    name: 'todayposts',
    unsigned: true,
    default: () => "'0'",
  })
  todayposts: number;

  @Column('mediumint', {
    name: 'yesterdayposts',
    unsigned: true,
    default: () => "'0'",
  })
  yesterdayposts: number;

  @Column('smallint', { name: 'rank', unsigned: true, default: () => "'0'" })
  rank: number;

  @Column('smallint', { name: 'oldrank', unsigned: true, default: () => "'0'" })
  oldrank: number;

  @Column('char', { name: 'lastpost', length: 110 })
  lastpost: string;

  @Column('tinyint', { name: 'allowsmilies', width: 1, default: () => "'0'" })
  allowsmilies: boolean;

  @Column('tinyint', { name: 'allowhtml', width: 1, default: () => "'0'" })
  allowhtml: boolean;

  @Column('tinyint', { name: 'allowbbcode', width: 1, default: () => "'0'" })
  allowbbcode: boolean;

  @Column('tinyint', { name: 'allowimgcode', width: 1, default: () => "'0'" })
  allowimgcode: boolean;

  @Column('tinyint', { name: 'allowmediacode', width: 1, default: () => "'0'" })
  allowmediacode: boolean;

  @Column('tinyint', { name: 'allowanonymous', width: 1, default: () => "'0'" })
  allowanonymous: boolean;

  @Column('smallint', {
    name: 'allowpostspecial',
    unsigned: true,
    default: () => "'0'",
  })
  allowpostspecial: number;

  @Column('tinyint', {
    name: 'allowspecialonly',
    width: 1,
    default: () => "'0'",
  })
  allowspecialonly: boolean;

  @Column('tinyint', { name: 'alloweditrules', width: 1, default: () => "'0'" })
  alloweditrules: boolean;

  @Column('tinyint', { name: 'allowfeed', width: 1, default: () => "'1'" })
  allowfeed: boolean;

  @Column('tinyint', { name: 'allowside', width: 1, default: () => "'0'" })
  allowside: boolean;

  @Column('tinyint', { name: 'recyclebin', width: 1, default: () => "'0'" })
  recyclebin: boolean;

  @Column('tinyint', { name: 'modnewposts', width: 1, default: () => "'0'" })
  modnewposts: boolean;

  @Column('tinyint', { name: 'jammer', width: 1, default: () => "'0'" })
  jammer: boolean;

  @Column('tinyint', {
    name: 'disablewatermark',
    width: 1,
    default: () => "'0'",
  })
  disablewatermark: boolean;

  @Column('tinyint', { name: 'inheritedmod', width: 1, default: () => "'0'" })
  inheritedmod: boolean;

  @Column('smallint', { name: 'autoclose', default: () => "'0'" })
  autoclose: number;

  @Column('tinyint', {
    name: 'forumcolumns',
    unsigned: true,
    default: () => "'0'",
  })
  forumcolumns: number;

  @Column('tinyint', { name: 'threadcaches', width: 1, default: () => "'0'" })
  threadcaches: boolean;

  @Column('tinyint', { name: 'alloweditpost', width: 1, default: () => "'1'" })
  alloweditpost: boolean;

  @Column('tinyint', { name: 'simple', width: 1, default: () => "'0'" })
  simple: boolean;

  @Column('tinyint', { name: 'modworks', width: 1, default: () => "'0'" })
  modworks: boolean;

  @Column('tinyint', { name: 'allowtag', width: 1, default: () => "'0'" })
  allowtag: boolean;

  @Column('tinyint', {
    name: 'allowglobalstick',
    width: 1,
    default: () => "'1'",
  })
  allowglobalstick: boolean;

  @Column('smallint', { name: 'level', default: () => "'0'" })
  level: number;

  @Column('int', {
    name: 'commoncredits',
    unsigned: true,
    default: () => "'0'",
  })
  commoncredits: number;

  @Column('tinyint', { name: 'archive', width: 1, default: () => "'0'" })
  archive: boolean;

  @Column('smallint', {
    name: 'recommend',
    unsigned: true,
    default: () => "'0'",
  })
  recommend: number;

  @Column('char', { name: 'domain', length: 15 })
  domain: string;

  @Column('tinyint', { name: 'allowappend', width: 1, default: () => "'0'" })
  allowappend: boolean;

  @Column('mediumint', {
    name: 'favtimes',
    unsigned: true,
    default: () => "'0'",
  })
  favtimes: number;

  @Column('mediumint', {
    name: 'sharetimes',
    unsigned: true,
    default: () => "'0'",
  })
  sharetimes: number;

  @Column('tinyint', {
    name: 'catforumcolumns',
    unsigned: true,
    default: () => "'0'",
  })
  catforumcolumns: number;

  @Column('tinyint', { name: 'disablethumb', width: 1, default: () => "'0'" })
  disablethumb: boolean;

  @Column('tinyint', { name: 'disablecollect', width: 1, default: () => "'0'" })
  disablecollect: boolean;
}
