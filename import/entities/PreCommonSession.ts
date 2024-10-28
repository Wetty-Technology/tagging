import { Column, Entity, Index } from 'typeorm';

@Index('sid', ['sid'], { unique: true })
@Index('uid', ['uid'], {})
@Entity('pre_common_session')
export class PreCommonSession {
  @Column('char', { name: 'sid', length: 6 })
  sid: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('tinyint', { name: 'ip1', unsigned: true, default: () => "'0'" })
  ip1: number;

  @Column('tinyint', { name: 'ip2', unsigned: true, default: () => "'0'" })
  ip2: number;

  @Column('tinyint', { name: 'ip3', unsigned: true, default: () => "'0'" })
  ip3: number;

  @Column('tinyint', { name: 'ip4', unsigned: true, default: () => "'0'" })
  ip4: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('smallint', { name: 'groupid', unsigned: true, default: () => "'0'" })
  groupid: number;

  @Column('tinyint', { name: 'invisible', width: 1, default: () => "'0'" })
  invisible: boolean;

  @Column('tinyint', { name: 'action', unsigned: true, default: () => "'0'" })
  action: number;

  @Column('int', { name: 'lastactivity', unsigned: true, default: () => "'0'" })
  lastactivity: number;

  @Column('int', { name: 'lastolupdate', unsigned: true, default: () => "'0'" })
  lastolupdate: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;
}
