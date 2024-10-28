import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('username', ['username'], { unique: true })
@Index('email', ['email'], {})
@Index('groupid', ['groupid'], {})
@Index('conisbind', ['conisbind'], {})
@Index('regdate', ['regdate'], {})
@Entity('pre_common_member_archive')
export class PreCommonMemberArchive {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'email', length: 40 })
  email: string;

  @Column('char', { name: 'username', unique: true, length: 15 })
  username: string;

  @Column('char', { name: 'password', length: 32 })
  password: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('tinyint', { name: 'emailstatus', width: 1, default: () => "'0'" })
  emailstatus: boolean;

  @Column('tinyint', { name: 'avatarstatus', width: 1, default: () => "'0'" })
  avatarstatus: boolean;

  @Column('tinyint', {
    name: 'videophotostatus',
    width: 1,
    default: () => "'0'",
  })
  videophotostatus: boolean;

  @Column('tinyint', { name: 'adminid', width: 1, default: () => "'0'" })
  adminid: boolean;

  @Column('smallint', { name: 'groupid', unsigned: true, default: () => "'0'" })
  groupid: number;

  @Column('int', { name: 'groupexpiry', unsigned: true, default: () => "'0'" })
  groupexpiry: number;

  @Column('char', { name: 'extgroupids', length: 20 })
  extgroupids: string;

  @Column('int', { name: 'regdate', unsigned: true, default: () => "'0'" })
  regdate: number;

  @Column('int', { name: 'credits', default: () => "'0'" })
  credits: number;

  @Column('tinyint', { name: 'notifysound', width: 1, default: () => "'0'" })
  notifysound: boolean;

  @Column('char', { name: 'timeoffset', length: 4 })
  timeoffset: string;

  @Column('smallint', { name: 'newpm', unsigned: true, default: () => "'0'" })
  newpm: number;

  @Column('smallint', {
    name: 'newprompt',
    unsigned: true,
    default: () => "'0'",
  })
  newprompt: number;

  @Column('tinyint', { name: 'accessmasks', width: 1, default: () => "'0'" })
  accessmasks: boolean;

  @Column('tinyint', { name: 'allowadmincp', width: 1, default: () => "'0'" })
  allowadmincp: boolean;

  @Column('tinyint', {
    name: 'onlyacceptfriendpm',
    width: 1,
    default: () => "'0'",
  })
  onlyacceptfriendpm: boolean;

  @Column('tinyint', {
    name: 'conisbind',
    unsigned: true,
    default: () => "'0'",
  })
  conisbind: number;

  @Column('tinyint', { name: 'freeze', width: 1, default: () => "'0'" })
  freeze: boolean;
}
