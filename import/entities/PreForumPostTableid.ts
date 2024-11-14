import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forum_post_tableid')
export class PreForumPostTableid {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pid', unsigned: true })
  pid: number;
}
