import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('creditsrange', ['creditshigher', 'creditslower'], {})
@Entity('common_usergroup')
export class PreCommonUsergroup {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'groupid', unsigned: true })
  groupid: number;

  @Column('tinyint', { name: 'radminid', default: () => "'0'" })
  radminid: number;

  @Column('enum', {
    name: 'type',
    enum: ['system', 'special', 'member'],
    default: () => "'member'",
  })
  type: 'system' | 'special' | 'member';

  @Column('varchar', {
    name: 'system',
    length: 255,
    default: () => "'private'",
  })
  system: string;

  @Column('varchar', { name: 'grouptitle', length: 255 })
  grouptitle: string;

  @Column('int', { name: 'creditshigher', default: () => "'0'" })
  creditshigher: number;

  @Column('int', { name: 'creditslower', default: () => "'0'" })
  creditslower: number;

  @Column('tinyint', { name: 'stars', default: () => "'0'" })
  stars: number;

  @Column('varchar', { name: 'color', length: 255 })
  color: string;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('tinyint', { name: 'allowvisit', width: 1, default: () => "'0'" })
  allowvisit: boolean;

  @Column('tinyint', { name: 'allowsendpm', width: 1, default: () => "'1'" })
  allowsendpm: boolean;

  @Column('tinyint', { name: 'allowinvite', width: 1, default: () => "'0'" })
  allowinvite: boolean;

  @Column('tinyint', {
    name: 'allowmailinvite',
    width: 1,
    default: () => "'0'",
  })
  allowmailinvite: boolean;

  @Column('tinyint', { name: 'allowfollow', width: 1, default: () => "'0'" })
  allowfollow: boolean;

  @Column('tinyint', {
    name: 'maxinvitenum',
    unsigned: true,
    default: () => "'0'",
  })
  maxinvitenum: number;

  @Column('smallint', {
    name: 'inviteprice',
    unsigned: true,
    default: () => "'0'",
  })
  inviteprice: number;

  @Column('smallint', {
    name: 'maxinviteday',
    unsigned: true,
    default: () => "'0'",
  })
  maxinviteday: number;
}
