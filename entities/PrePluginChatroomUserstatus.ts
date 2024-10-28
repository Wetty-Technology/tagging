import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid_2', ['uid', 'st'], { unique: true })
@Index('uid', ['uid'], {})
@Entity('pre_plugin_chatroom_userstatus')
export class PrePluginChatroomUserstatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'uid', nullable: true, length: 10 })
  uid: string | null;

  @Column('tinyint', { name: 'st', nullable: true, default: () => "'0'" })
  st: number | null;

  @Column('varchar', { name: 'username', length: 30 })
  username: string;

  @Column('timestamp', {
    name: 'ctime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  ctime: Date | null;
}
