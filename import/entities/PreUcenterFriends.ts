import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Index('friendid', ['friendid'], {})
@Entity('pre_ucenter_friends')
export class PreUcenterFriends {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', {
    name: 'friendid',
    unsigned: true,
    default: () => "'0'",
  })
  friendid: number;

  @Column('tinyint', { name: 'direction', width: 1, default: () => "'0'" })
  direction: boolean;

  @PrimaryGeneratedColumn({ type: 'int', name: 'version', unsigned: true })
  version: number;

  @Column('tinyint', { name: 'delstatus', width: 1, default: () => "'0'" })
  delstatus: boolean;

  @Column('char', { name: 'comment', length: 255 })
  comment: string;
}
