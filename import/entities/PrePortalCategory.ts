import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_portal_category')
export class PrePortalCategory {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'catid', unsigned: true })
  catid: number;

  @Column('mediumint', { name: 'upid', unsigned: true, default: () => "'0'" })
  upid: number;

  @Column('varchar', { name: 'catname', length: 255 })
  catname: string;

  @Column('mediumint', {
    name: 'articles',
    unsigned: true,
    default: () => "'0'",
  })
  articles: number;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('tinyint', { name: 'allowcomment', width: 1, default: () => "'1'" })
  allowcomment: boolean;

  @Column('tinyint', {
    name: 'notinheritedarticle',
    width: 1,
    default: () => "'0'",
  })
  notinheritedarticle: boolean;

  @Column('tinyint', {
    name: 'notinheritedblock',
    width: 1,
    default: () => "'0'",
  })
  notinheritedblock: boolean;

  @Column('varchar', { name: 'domain', length: 255 })
  domain: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'closed', width: 1, default: () => "'0'" })
  closed: boolean;

  @Column('tinyint', { name: 'shownav', width: 1, default: () => "'0'" })
  shownav: boolean;

  @Column('mediumtext', { name: 'description' })
  description: string;

  @Column('mediumtext', { name: 'keyword' })
  keyword: string;

  @Column('varchar', { name: 'primaltplname', length: 255 })
  primaltplname: string;

  @Column('tinyint', {
    name: 'disallowpublish',
    width: 1,
    default: () => "'0'",
  })
  disallowpublish: boolean;

  @Column('varchar', { name: 'foldername', length: 255 })
  foldername: string;

  @Column('mediumtext', { name: 'seotitle' })
  seotitle: string;

  @Column('varchar', { name: 'articleprimaltplname', length: 255 })
  articleprimaltplname: string;

  @Column('varchar', { name: 'notshowarticlesummay', length: 255 })
  notshowarticlesummay: string;

  @Column('smallint', { name: 'perpage', default: () => "'0'" })
  perpage: number;

  @Column('smallint', { name: 'maxpages', default: () => "'0'" })
  maxpages: number;

  @Column('tinyint', { name: 'noantitheft', width: 1, default: () => "'0'" })
  noantitheft: boolean;

  @Column('int', { name: 'lastpublish', unsigned: true, default: () => "'0'" })
  lastpublish: number;
}
