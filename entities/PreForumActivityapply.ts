import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Index('tid', ['tid'], {})
@Index('dateline', ['tid', 'dateline'], {})
@Entity('pre_forum_activityapply')
export class PreForumActivityapply {
  @PrimaryGeneratedColumn({ type: 'int', name: 'applyid', unsigned: true })
  applyid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'message', length: 255 })
  message: string;

  @Column('tinyint', { name: 'verified', width: 1, default: () => "'0'" })
  verified: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumint', { name: 'payment', default: () => "'0'" })
  payment: number;

  @Column('mediumtext', { name: 'ufielddata' })
  ufielddata: string;
}
