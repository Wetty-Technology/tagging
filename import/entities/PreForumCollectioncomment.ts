import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('ctid', ['ctid', 'dateline'], {})
@Index('userrate', ['ctid', 'uid', 'rate'], {})
@Entity('pre_forum_collectioncomment')
export class PreForumCollectioncomment {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'ctid', unsigned: true, default: () => "'0'" })
  ctid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'useip', length: 45 })
  useip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('float', { name: 'rate', precision: 12, default: () => "'0'" })
  rate: number;
}
