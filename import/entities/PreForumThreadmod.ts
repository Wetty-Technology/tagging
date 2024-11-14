import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid', 'dateline'], {})
@Index('expiration', ['expiration', 'status'], {})
@Entity('forum_threadmod')
export class PreForumThreadmod {
  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('char', { name: 'action', length: 5 })
  action: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('smallint', { name: 'magicid', unsigned: true })
  magicid: number;

  @Column('tinyint', { name: 'stamp' })
  stamp: number;

  @Column('char', { name: 'reason', length: 40 })
  reason: string;
}
