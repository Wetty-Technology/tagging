import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('redid', ['redid'], { unique: true })
@Entity('plugin_chatroom_redbag_cache')
export class PrePluginChatroomRedbagCache {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cacheid' })
  cacheid: number;

  @Column('int', { name: 'redid', nullable: true, unique: true })
  redid: number | null;

  @Column('bigint', { name: 'uid', nullable: true })
  uid: string | null;

  @Column('mediumtext', { name: 'perinfo', nullable: true })
  perinfo: string | null;

  @Column('mediumtext', { name: 'peruser', nullable: true })
  peruser: string | null;

  @Column('int', { name: 'cash', nullable: true, default: () => "'0'" })
  cash: number | null;

  @Column('int', { name: 'cash_total', nullable: true, default: () => "'0'" })
  cashTotal: number | null;

  @Column('int', { name: 'numb', nullable: true, default: () => "'0'" })
  numb: number | null;

  @Column('int', { name: 'numb_total', nullable: true, default: () => "'0'" })
  numbTotal: number | null;

  @Column('int', { name: 'ctime', nullable: true })
  ctime: number | null;

  @Column('tinyint', { name: 'status', nullable: true, default: () => "'1'" })
  status: number | null;
}
