import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('topicid', ['topicid'], {})
@Entity('pre_portal_topic_pic')
export class PrePortalTopicPic {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'picid' })
  picid: number;

  @Column('mediumint', {
    name: 'topicid',
    unsigned: true,
    default: () => "'0'",
  })
  topicid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'filename', length: 255 })
  filename: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('int', { name: 'size', unsigned: true, default: () => "'0'" })
  size: number;

  @Column('varchar', { name: 'filepath', length: 255 })
  filepath: string;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;
}
