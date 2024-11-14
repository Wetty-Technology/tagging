import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mobile_wechat_masssend')
export class PreMobileWechatMasssend {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('char', { name: 'type', length: 5 })
  type: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('int', { name: 'resource_id', unsigned: true })
  resourceId: number;

  @Column('int', { name: 'group_id', unsigned: true })
  groupId: number;

  @Column('mediumtext', { name: 'text', nullable: true })
  text: string | null;

  @Column('char', { name: 'media_id', nullable: true, length: 64 })
  mediaId: string | null;

  @Column('int', { name: 'created_at', unsigned: true })
  createdAt: number;

  @Column('int', { name: 'sent_at', nullable: true, unsigned: true })
  sentAt: number | null;

  @Column('int', { name: 'msg_id', nullable: true, unsigned: true })
  msgId: number | null;

  @Column('varchar', { name: 'res_status', nullable: true, length: 50 })
  resStatus: string | null;

  @Column('int', { name: 'res_totalcount', nullable: true })
  resTotalcount: number | null;

  @Column('int', { name: 'res_filtercount', nullable: true })
  resFiltercount: number | null;

  @Column('int', { name: 'res_sentcount', nullable: true })
  resSentcount: number | null;

  @Column('int', { name: 'res_errorcount', nullable: true })
  resErrorcount: number | null;

  @Column('int', { name: 'res_finish_at', nullable: true })
  resFinishAt: number | null;
}
