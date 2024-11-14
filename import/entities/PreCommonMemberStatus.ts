import { Column, Entity, Index } from 'typeorm';

@Index('lastactivity', ['lastactivity', 'invisible'], {})
@Entity('common_member_status')
export class PreCommonMemberStatus {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('varchar', { name: 'regip', length: 45 })
  regip: string;

  @Column('varchar', { name: 'lastip', length: 45 })
  lastip: string;

  @Column('smallint', { name: 'regport', unsigned: true, default: () => "'0'" })
  regport: number;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('int', { name: 'lastvisit', unsigned: true, default: () => "'0'" })
  lastvisit: number;

  @Column('int', { name: 'lastactivity', unsigned: true, default: () => "'0'" })
  lastactivity: number;

  @Column('int', { name: 'lastpost', unsigned: true, default: () => "'0'" })
  lastpost: number;

  @Column('int', { name: 'lastsendmail', unsigned: true, default: () => "'0'" })
  lastsendmail: number;

  @Column('smallint', {
    name: 'notifications',
    unsigned: true,
    default: () => "'0'",
  })
  notifications: number;

  @Column('smallint', {
    name: 'groupinvitations',
    unsigned: true,
    default: () => "'0'",
  })
  groupinvitations: number;

  @Column('smallint', {
    name: 'activityinvitations',
    unsigned: true,
    default: () => "'0'",
  })
  activityinvitations: number;

  @Column('smallint', {
    name: 'myinvitations',
    unsigned: true,
    default: () => "'0'",
  })
  myinvitations: number;

  @Column('smallint', { name: 'pokes', unsigned: true, default: () => "'0'" })
  pokes: number;

  @Column('smallint', {
    name: 'pendingfriends',
    unsigned: true,
    default: () => "'0'",
  })
  pendingfriends: number;

  @Column('tinyint', { name: 'invisible', width: 1, default: () => "'0'" })
  invisible: boolean;

  @Column('smallint', { name: 'buyercredit', default: () => "'0'" })
  buyercredit: number;

  @Column('smallint', { name: 'sellercredit', default: () => "'0'" })
  sellercredit: number;

  @Column('mediumint', {
    name: 'favtimes',
    unsigned: true,
    default: () => "'0'",
  })
  favtimes: number;

  @Column('mediumint', {
    name: 'sharetimes',
    unsigned: true,
    default: () => "'0'",
  })
  sharetimes: number;

  @Column('tinyint', {
    name: 'profileprogress',
    unsigned: true,
    default: () => "'0'",
  })
  profileprogress: number;
}
