import { Column, Entity } from 'typeorm';

@Entity('forum_threadrush')
export class PreForumThreadrush {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', {
    name: 'stopfloor',
    unsigned: true,
    default: () => "'0'",
  })
  stopfloor: number;

  @Column('int', {
    name: 'starttimefrom',
    unsigned: true,
    default: () => "'0'",
  })
  starttimefrom: number;

  @Column('int', { name: 'starttimeto', unsigned: true, default: () => "'0'" })
  starttimeto: number;

  @Column('mediumtext', { name: 'rewardfloor' })
  rewardfloor: string;

  @Column('int', { name: 'creditlimit', default: () => "'-996'" })
  creditlimit: number;

  @Column('smallint', { name: 'replylimit', default: () => "'0'" })
  replylimit: number;
}
