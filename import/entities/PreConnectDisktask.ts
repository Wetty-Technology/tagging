import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('openid', ['openid'], {})
@Index('status', ['status'], {})
@Entity('pre_connect_disktask')
export class PreConnectDisktask {
  @PrimaryGeneratedColumn({ type: 'int', name: 'taskid', unsigned: true })
  taskid: number;

  @Column('int', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;

  @Column('int', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'openid', length: 32 })
  openid: string;

  @Column('varchar', { name: 'filename', length: 255 })
  filename: string;

  @Column('char', { name: 'verifycode', length: 32 })
  verifycode: string;

  @Column('smallint', { name: 'status', unsigned: true, default: () => "'0'" })
  status: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'downloadtime', unsigned: true, default: () => "'0'" })
  downloadtime: number;

  @Column('mediumtext', { name: 'extra', nullable: true })
  extra: string | null;
}
