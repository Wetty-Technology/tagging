import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('timespan', ['starttime', 'endtime'], {})
@Entity('pre_forum_announcement')
export class PreForumAnnouncement {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'author', length: 15 })
  author: string;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('int', { name: 'starttime', unsigned: true, default: () => "'0'" })
  starttime: number;

  @Column('int', { name: 'endtime', unsigned: true, default: () => "'0'" })
  endtime: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('mediumtext', { name: 'groups' })
  groups: string;
}
