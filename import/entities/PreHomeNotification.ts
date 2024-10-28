import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('from_id', ['fromId', 'fromIdtype'], {})
@Index('uid', ['uid', 'new'], {})
@Index('category', ['uid', 'category', 'dateline'], {})
@Index('by_type', ['uid', 'type', 'dateline'], {})
@Entity('pre_home_notification')
export class PreHomeNotification {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'type', length: 20 })
  type: string;

  @Column('tinyint', { name: 'new', width: 1, default: () => "'0'" })
  new: boolean;

  @Column('mediumint', {
    name: 'authorid',
    unsigned: true,
    default: () => "'0'",
  })
  authorid: number;

  @Column('varchar', { name: 'author', length: 15 })
  author: string;

  @Column('mediumtext', { name: 'note' })
  note: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumint', {
    name: 'from_id',
    unsigned: true,
    default: () => "'0'",
  })
  fromId: number;

  @Column('varchar', { name: 'from_idtype', length: 20 })
  fromIdtype: string;

  @Column('mediumint', {
    name: 'from_num',
    unsigned: true,
    default: () => "'0'",
  })
  fromNum: number;

  @Column('tinyint', { name: 'category', width: 1, default: () => "'0'" })
  category: boolean;
}
