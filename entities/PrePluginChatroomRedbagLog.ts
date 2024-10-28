import { Column, Entity, Index } from 'typeorm';

@Index('redid', ['redid'], {})
@Entity('pre_plugin_chatroom_redbag_log')
export class PrePluginChatroomRedbagLog {
  @Column('int', { name: 'redid' })
  redid: number;

  @Column('int', { name: 'uid', nullable: true })
  uid: number | null;

  @Column('int', { name: 'cash', nullable: true })
  cash: number | null;

  @Column('varchar', { name: 'name', nullable: true, length: 50 })
  name: string | null;

  @Column('timestamp', {
    name: 'ctime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  ctime: Date | null;
}
