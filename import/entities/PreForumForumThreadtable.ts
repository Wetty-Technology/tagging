import { Column, Entity } from 'typeorm';

@Entity('pre_forum_forum_threadtable')
export class PreForumForumThreadtable {
  @Column('smallint', { primary: true, name: 'fid', unsigned: true })
  fid: number;

  @Column('smallint', { primary: true, name: 'threadtableid', unsigned: true })
  threadtableid: number;

  @Column('int', { name: 'threads', unsigned: true, default: () => "'0'" })
  threads: number;

  @Column('int', { name: 'posts', unsigned: true, default: () => "'0'" })
  posts: number;
}
