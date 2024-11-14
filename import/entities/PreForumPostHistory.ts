import { Column, Entity, Index } from 'typeorm';

@Index('pid', ['pid', 'dateline'], {})
@Entity('forum_post_history')
export class PreForumPostHistory {
  @Column('int', { primary: true, name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'pid', unsigned: true })
  pid: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('mediumtext', { name: 'message' })
  message: string;
}
