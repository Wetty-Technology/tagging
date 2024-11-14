import { Column, Entity, Index } from 'typeorm';

@Index('fid', ['fid'], {})
@Index('uid', ['uid'], {})
@Index('dateline', ['dateline'], {})
@Entity('forum_postlog')
export class PreForumPostlog {
  @Column('int', {
    primary: true,
    name: 'pid',
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column('mediumint', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('smallint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'action', length: 10 })
  action: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
