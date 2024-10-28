import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('name', ['name'], {})
@Entity('pre_portal_topic')
export class PrePortalTopic {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'topicid',
    unsigned: true,
  })
  topicid: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('mediumtext', { name: 'summary' })
  summary: string;

  @Column('varchar', { name: 'cover', length: 255 })
  cover: string;

  @Column('tinyint', { name: 'picflag', width: 1, default: () => "'0'" })
  picflag: boolean;

  @Column('varchar', { name: 'primaltplname', length: 255 })
  primaltplname: string;

  @Column('tinyint', { name: 'useheader', width: 1, default: () => "'0'" })
  useheader: boolean;

  @Column('tinyint', { name: 'usefooter', width: 1, default: () => "'0'" })
  usefooter: boolean;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('mediumint', {
    name: 'viewnum',
    unsigned: true,
    default: () => "'0'",
  })
  viewnum: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'closed', width: 1, default: () => "'0'" })
  closed: boolean;

  @Column('varchar', { name: 'domain', length: 255 })
  domain: string;

  @Column('mediumtext', { name: 'keyword' })
  keyword: string;

  @Column('tinyint', { name: 'allowcomment', width: 1, default: () => "'0'" })
  allowcomment: boolean;

  @Column('mediumint', {
    name: 'commentnum',
    unsigned: true,
    default: () => "'0'",
  })
  commentnum: number;

  @Column('tinyint', { name: 'htmlmade', width: 1, default: () => "'0'" })
  htmlmade: boolean;

  @Column('varchar', { name: 'htmldir', length: 255 })
  htmldir: string;
}
