import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_plugin_chatroom_vest')
export class PrePluginChatroomVest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'uid', length: 10 })
  uid: string;

  @Column('varchar', { name: 'username', length: 30 })
  username: string;

  @Column('int', { name: 'lastlogin', unsigned: true, default: () => "'0'" })
  lastlogin: number;

  @Column('varchar', { name: 'comment', length: 100 })
  comment: string;

  @Column('tinyint', {
    name: 'status',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  status: boolean | null;
}
