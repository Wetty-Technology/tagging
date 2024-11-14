import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('type', ['type'], {})
@Index('status', ['status', 'expiration'], {})
@Index('uid', ['uid', 'medalid', 'type'], {})
@Index('dateline', ['dateline'], {})
@Entity('forum_medallog')
export class PreForumMedallog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('smallint', { name: 'medalid', unsigned: true, default: () => "'0'" })
  medalid: number;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;
}
