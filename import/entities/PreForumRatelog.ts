import { Column, Entity, Index } from 'typeorm';

@Index('pid', ['pid', 'dateline'], {})
@Index('dateline', ['dateline'], {})
@Index('uid', ['uid'], {})
@Entity('pre_forum_ratelog')
export class PreForumRatelog {
  @Column('int', { name: 'pid', unsigned: true, default: () => "'0'" })
  pid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('tinyint', {
    name: 'extcredits',
    unsigned: true,
    default: () => "'0'",
  })
  extcredits: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('smallint', { name: 'score', default: () => "'0'" })
  score: number;

  @Column('char', { name: 'reason', length: 40 })
  reason: string;
}
