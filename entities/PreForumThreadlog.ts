import { Column, Entity, Index } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Entity('pre_forum_threadlog')
export class PreForumThreadlog {
  @Column('mediumint', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('smallint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('smallint', { name: 'otherid', unsigned: true, default: () => "'0'" })
  otherid: number;

  @Column('char', { name: 'action', length: 10 })
  action: string;

  @Column('int', { name: 'expiry', unsigned: true, default: () => "'0'" })
  expiry: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
