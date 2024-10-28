import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pid', ['pid'], {})
@Index('uid', ['uid'], {})
@Entity('pre_security_failedlog')
export class PreSecurityFailedlog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('char', { name: 'reporttype', length: 20 })
  reporttype: string;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', { name: 'pid', unsigned: true, default: () => "'0'" })
  pid: number;

  @Column('int', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'failcount', unsigned: true, default: () => "'0'" })
  failcount: number;

  @Column('int', { name: 'createtime', unsigned: true, default: () => "'0'" })
  createtime: number;

  @Column('int', { name: 'posttime', unsigned: true, default: () => "'0'" })
  posttime: number;

  @Column('char', { name: 'delreason', length: 255 })
  delreason: string;

  @Column('int', { name: 'scheduletime', unsigned: true, default: () => "'0'" })
  scheduletime: number;

  @Column('int', { name: 'lastfailtime', unsigned: true, default: () => "'0'" })
  lastfailtime: number;

  @Column('int', { name: 'extra1', unsigned: true })
  extra1: number;

  @Column('char', { name: 'extra2', length: 255, default: () => "'0'" })
  extra2: string;
}
