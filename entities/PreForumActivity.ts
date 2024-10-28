import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'starttimefrom'], {})
@Index('starttimefrom', ['starttimefrom'], {})
@Index('expiration', ['expiration'], {})
@Index('applynumber', ['applynumber'], {})
@Entity('pre_forum_activity')
export class PreForumActivity {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;

  @Column('mediumint', { name: 'cost', unsigned: true, default: () => "'0'" })
  cost: number;

  @Column('int', {
    name: 'starttimefrom',
    unsigned: true,
    default: () => "'0'",
  })
  starttimefrom: number;

  @Column('int', { name: 'starttimeto', unsigned: true, default: () => "'0'" })
  starttimeto: number;

  @Column('varchar', { name: 'place', length: 255 })
  place: string;

  @Column('varchar', { name: 'class', length: 255 })
  class: string;

  @Column('tinyint', { name: 'gender', width: 1, default: () => "'0'" })
  gender: boolean;

  @Column('smallint', { name: 'number', unsigned: true, default: () => "'0'" })
  number: number;

  @Column('smallint', {
    name: 'applynumber',
    unsigned: true,
    default: () => "'0'",
  })
  applynumber: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('mediumtext', { name: 'ufield' })
  ufield: string;

  @Column('smallint', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;
}
