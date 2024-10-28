import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('albumid', ['albumid', 'dateline'], {})
@Index('uid', ['uid'], {})
@Index('filepath', ['filepath'], {})
@Entity('pre_home_pic')
export class PreHomePic {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'picid' })
  picid: number;

  @Column('mediumint', {
    name: 'albumid',
    unsigned: true,
    default: () => "'0'",
  })
  albumid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'postip', length: 255 })
  postip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('varchar', { name: 'filename', length: 255 })
  filename: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'type', length: 255 })
  type: string;

  @Column('int', { name: 'size', unsigned: true, default: () => "'0'" })
  size: number;

  @Column('varchar', { name: 'filepath', length: 255 })
  filepath: string;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;

  @Column('mediumint', { name: 'hot', unsigned: true, default: () => "'0'" })
  hot: number;

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

  @Column('tinyint', { name: 'magicframe', default: () => "'0'" })
  magicframe: number;

  @Column('mediumint', {
    name: 'sharetimes',
    unsigned: true,
    default: () => "'0'",
  })
  sharetimes: number;

  @Column('tinyint', { name: 'status', unsigned: true, default: () => "'0'" })
  status: number;
}
