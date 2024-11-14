import { Column, Entity } from 'typeorm';

@Entity('forum_threadprofile_group')
export class PreForumThreadprofileGroup {
  @Column('mediumint', { primary: true, name: 'gid' })
  gid: number;

  @Column('mediumint', { name: 'tpid', unsigned: true })
  tpid: number;
}
