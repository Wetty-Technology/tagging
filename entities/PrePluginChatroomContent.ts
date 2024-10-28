import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Index('ousername', ['ousername'], {})
@Entity('pre_plugin_chatroom_content')
export class PrePluginChatroomContent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cid' })
  cid: number;

  @Column('longtext', { name: 'content', nullable: true })
  content: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 32 })
  uid: string | null;

  @Column('varchar', { name: 'username', nullable: true, length: 32 })
  username: string | null;

  @Column('varchar', { name: 'oid', nullable: true, length: 32 })
  oid: string | null;

  @Column('varchar', { name: 'ousername', nullable: true, length: 32 })
  ousername: string | null;

  @Column('tinyint', { name: 'status', nullable: true, default: () => "'1'" })
  status: number | null;

  @Column('int', { name: 'busflag', nullable: true, default: () => "'0'" })
  busflag: number | null;

  @Column('timestamp', {
    name: 'ctime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  ctime: Date | null;
}
