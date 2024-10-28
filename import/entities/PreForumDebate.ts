import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'starttime'], {})
@Entity('pre_forum_debate')
export class PreForumDebate {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'starttime', unsigned: true, default: () => "'0'" })
  starttime: number;

  @Column('int', { name: 'endtime', unsigned: true, default: () => "'0'" })
  endtime: number;

  @Column('mediumint', {
    name: 'affirmdebaters',
    unsigned: true,
    default: () => "'0'",
  })
  affirmdebaters: number;

  @Column('mediumint', {
    name: 'negadebaters',
    unsigned: true,
    default: () => "'0'",
  })
  negadebaters: number;

  @Column('mediumint', {
    name: 'affirmvotes',
    unsigned: true,
    default: () => "'0'",
  })
  affirmvotes: number;

  @Column('mediumint', {
    name: 'negavotes',
    unsigned: true,
    default: () => "'0'",
  })
  negavotes: number;

  @Column('varchar', { name: 'umpire', length: 15 })
  umpire: string;

  @Column('tinyint', { name: 'winner', width: 1, default: () => "'0'" })
  winner: boolean;

  @Column('varchar', { name: 'bestdebater', length: 50 })
  bestdebater: string;

  @Column('mediumtext', { name: 'affirmpoint' })
  affirmpoint: string;

  @Column('mediumtext', { name: 'negapoint' })
  negapoint: string;

  @Column('mediumtext', { name: 'umpirepoint' })
  umpirepoint: string;

  @Column('mediumtext', { name: 'affirmvoterids' })
  affirmvoterids: string;

  @Column('mediumtext', { name: 'negavoterids' })
  negavoterids: string;

  @Column('mediumint', { name: 'affirmreplies', unsigned: true })
  affirmreplies: number;

  @Column('mediumint', { name: 'negareplies', unsigned: true })
  negareplies: number;
}
