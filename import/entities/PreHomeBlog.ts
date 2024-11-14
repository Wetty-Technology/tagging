import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Index('hot', ['hot'], {})
@Index('dateline', ['dateline'], {})
@Entity('home_blog')
export class PreHomeBlog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'blogid', unsigned: true })
  blogid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('smallint', { name: 'classid', unsigned: true, default: () => "'0'" })
  classid: number;

  @Column('smallint', { name: 'catid', unsigned: true, default: () => "'0'" })
  catid: number;

  @Column('mediumint', {
    name: 'viewnum',
    unsigned: true,
    default: () => "'0'",
  })
  viewnum: number;

  @Column('mediumint', {
    name: 'replynum',
    unsigned: true,
    default: () => "'0'",
  })
  replynum: number;

  @Column('mediumint', { name: 'hot', unsigned: true, default: () => "'0'" })
  hot: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'picflag', width: 1, default: () => "'0'" })
  picflag: boolean;

  @Column('tinyint', { name: 'noreply', width: 1, default: () => "'0'" })
  noreply: boolean;

  @Column('tinyint', { name: 'friend', width: 1, default: () => "'0'" })
  friend: boolean;

  @Column('char', { name: 'password', length: 10 })
  password: string;

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

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;
}
