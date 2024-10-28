import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Index('hotcollection', ['threadnum', 'lastupdate'], {})
@Index('follownum', ['follownum'], {})
@Index('uid', ['uid'], {})
@Entity('pre_forum_collection')
export class PreForumCollection {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'ctid', unsigned: true })
  ctid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumint', {
    name: 'follownum',
    unsigned: true,
    default: () => "'0'",
  })
  follownum: number;

  @Column('mediumint', {
    name: 'threadnum',
    unsigned: true,
    default: () => "'0'",
  })
  threadnum: number;

  @Column('mediumint', {
    name: 'commentnum',
    unsigned: true,
    default: () => "'0'",
  })
  commentnum: number;

  @Column('varchar', { name: 'desc', length: 255 })
  desc: string;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('float', { name: 'rate', precision: 12, default: () => "'0'" })
  rate: number;

  @Column('mediumint', {
    name: 'ratenum',
    unsigned: true,
    default: () => "'0'",
  })
  ratenum: number;

  @Column('mediumint', {
    name: 'lastpost',
    unsigned: true,
    default: () => "'0'",
  })
  lastpost: number;

  @Column('varchar', { name: 'lastsubject', length: 255 })
  lastsubject: string;

  @Column('int', { name: 'lastposttime', unsigned: true, default: () => "'0'" })
  lastposttime: number;

  @Column('varchar', { name: 'lastposter', length: 15 })
  lastposter: string;

  @Column('int', { name: 'lastvisit', unsigned: true, default: () => "'0'" })
  lastvisit: number;

  @Column('varchar', { name: 'keyword', length: 255 })
  keyword: string;
}
