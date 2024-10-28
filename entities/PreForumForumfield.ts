import { Column, Entity, Index } from 'typeorm';

@Index('membernum', ['membernum'], {})
@Index('dateline', ['dateline'], {})
@Index('lastupdate', ['lastupdate'], {})
@Index('activity', ['activity'], {})
@Entity('pre_forum_forumfield')
export class PreForumForumfield {
  @Column('mediumint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('mediumtext', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'password', length: 12 })
  password: string;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('varchar', { name: 'redirect', length: 255 })
  redirect: string;

  @Column('varchar', { name: 'attachextensions', length: 255 })
  attachextensions: string;

  @Column('longtext', { name: 'creditspolicy' })
  creditspolicy: string;

  @Column('mediumtext', { name: 'formulaperm' })
  formulaperm: string;

  @Column('mediumtext', { name: 'moderators' })
  moderators: string;

  @Column('mediumtext', { name: 'rules' })
  rules: string;

  @Column('mediumtext', { name: 'threadtypes' })
  threadtypes: string;

  @Column('mediumtext', { name: 'threadsorts' })
  threadsorts: string;

  @Column('mediumtext', { name: 'viewperm' })
  viewperm: string;

  @Column('mediumtext', { name: 'postperm' })
  postperm: string;

  @Column('mediumtext', { name: 'replyperm' })
  replyperm: string;

  @Column('mediumtext', { name: 'getattachperm' })
  getattachperm: string;

  @Column('mediumtext', { name: 'postattachperm' })
  postattachperm: string;

  @Column('mediumtext', { name: 'postimageperm' })
  postimageperm: string;

  @Column('mediumtext', { name: 'keywords' })
  keywords: string;

  @Column('mediumtext', { name: 'seodescription', comment: '????seo????' })
  seodescription: string;

  @Column('mediumtext', { name: 'supe_pushsetting' })
  supePushsetting: string;

  @Column('mediumtext', { name: 'modrecommend' })
  modrecommend: string;

  @Column('mediumtext', { name: 'threadplugin' })
  threadplugin: string;

  @Column('mediumtext', { name: 'replybg' })
  replybg: string;

  @Column('mediumtext', { name: 'extra' })
  extra: string;

  @Column('tinyint', { name: 'jointype', width: 1, default: () => "'0'" })
  jointype: boolean;

  @Column('tinyint', { name: 'gviewperm', width: 1, default: () => "'0'" })
  gviewperm: boolean;

  @Column('smallint', {
    name: 'membernum',
    unsigned: true,
    default: () => "'0'",
  })
  membernum: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('int', { name: 'activity', unsigned: true, default: () => "'0'" })
  activity: number;

  @Column('mediumint', {
    name: 'founderuid',
    unsigned: true,
    default: () => "'0'",
  })
  founderuid: number;

  @Column('varchar', { name: 'foundername', length: 255 })
  foundername: string;

  @Column('varchar', { name: 'banner', length: 255 })
  banner: string;

  @Column('smallint', {
    name: 'groupnum',
    unsigned: true,
    default: () => "'0'",
  })
  groupnum: number;

  @Column('mediumtext', { name: 'commentitem' })
  commentitem: string;

  @Column('mediumtext', { name: 'spviewperm' })
  spviewperm: string;

  @Column('tinyint', { name: 'hidemenu', width: 1, default: () => "'0'" })
  hidemenu: boolean;

  @Column('mediumtext', { name: 'seotitle' })
  seotitle: string;

  @Column('mediumtext', { name: 'relatedgroup' })
  relatedgroup: string;

  @Column('tinyint', { name: 'picstyle', width: 1, default: () => "'0'" })
  picstyle: boolean;

  @Column('tinyint', { name: 'widthauto', width: 1, default: () => "'0'" })
  widthauto: boolean;

  @Column('tinyint', { name: 'noantitheft', width: 1, default: () => "'0'" })
  noantitheft: boolean;

  @Column('tinyint', {
    name: 'noforumhidewater',
    width: 1,
    default: () => "'0'",
  })
  noforumhidewater: boolean;

  @Column('tinyint', {
    name: 'noforumrecommend',
    width: 1,
    default: () => "'0'",
  })
  noforumrecommend: boolean;

  @Column('int', { name: 'livetid', unsigned: true, default: () => "'0'" })
  livetid: number;

  @Column('mediumint', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;
}
