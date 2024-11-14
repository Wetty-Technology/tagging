import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('catid', ['catid', 'dateline'], {})
@Entity('portal_article_title')
export class PrePortalArticleTitle {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'aid', unsigned: true })
  aid: number;

  @Column('mediumint', { name: 'catid', unsigned: true, default: () => "'0'" })
  catid: number;

  @Column('mediumint', { name: 'bid', unsigned: true, default: () => "'0'" })
  bid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'shorttitle', length: 255 })
  shorttitle: string;

  @Column('varchar', { name: 'author', length: 255 })
  author: string;

  @Column('varchar', { name: 'from', length: 255 })
  from: string;

  @Column('varchar', { name: 'fromurl', length: 255 })
  fromurl: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('varchar', { name: 'summary', length: 255 })
  summary: string;

  @Column('varchar', { name: 'pic', length: 255 })
  pic: string;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;

  @Column('varchar', { name: 'prename', length: 255 })
  prename: string;

  @Column('varchar', { name: 'preurl', length: 255 })
  preurl: string;

  @Column('int', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 255 })
  idtype: string;

  @Column('smallint', { name: 'contents', default: () => "'0'" })
  contents: number;

  @Column('tinyint', { name: 'allowcomment', width: 1, default: () => "'0'" })
  allowcomment: boolean;

  @Column('smallint', { name: 'click1', unsigned: true, default: () => "'0'" })
  click1: number;

  @Column('smallint', { name: 'click2', unsigned: true, default: () => "'0'" })
  click2: number;

  @Column('smallint', { name: 'click3', unsigned: true, default: () => "'0'" })
  click3: number;

  @Column('smallint', { name: 'click4', unsigned: true, default: () => "'0'" })
  click4: number;

  @Column('smallint', { name: 'click5', unsigned: true, default: () => "'0'" })
  click5: number;

  @Column('smallint', { name: 'click6', unsigned: true, default: () => "'0'" })
  click6: number;

  @Column('smallint', { name: 'click7', unsigned: true, default: () => "'0'" })
  click7: number;

  @Column('smallint', { name: 'click8', unsigned: true, default: () => "'0'" })
  click8: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'owncomment', width: 1, default: () => "'0'" })
  owncomment: boolean;

  @Column('tinyint', { name: 'tag', unsigned: true, default: () => "'0'" })
  tag: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('varchar', { name: 'highlight', length: 255 })
  highlight: string;

  @Column('tinyint', { name: 'showinnernav', width: 1, default: () => "'0'" })
  showinnernav: boolean;

  @Column('mediumint', { name: 'preaid', unsigned: true })
  preaid: number;

  @Column('mediumint', { name: 'nextaid', unsigned: true })
  nextaid: number;

  @Column('tinyint', { name: 'htmlmade', width: 1, default: () => "'0'" })
  htmlmade: boolean;

  @Column('varchar', { name: 'htmlname', length: 255 })
  htmlname: string;

  @Column('varchar', { name: 'htmldir', length: 255 })
  htmldir: string;
}
