import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('home_follow_feed')
export class PreHomeFollowFeed {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'feedid', unsigned: true })
  feedid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumtext', { name: 'note' })
  note: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
