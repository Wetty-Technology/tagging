import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('redid', ['redid'], { unique: true })
@Entity('pre_plugin_chatroom_redbag')
export class PrePluginChatroomRedbag {
  @PrimaryGeneratedColumn({ type: 'int', name: 'redid' })
  redid: number;

  @Column('bigint', { name: 'uid', nullable: true })
  uid: string | null;

  @Column('varchar', { name: 'bak', nullable: true, length: 100 })
  bak: string | null;

  @Column('tinyint', { name: 'status', nullable: true, default: () => "'1'" })
  status: number | null;

  @Column('tinyint', { name: 'type', nullable: true, default: () => "'1'" })
  type: number | null;

  @Column('int', { name: 'ctime', nullable: true })
  ctime: number | null;

  @Column('int', { name: 'etime', nullable: true })
  etime: number | null;
}
