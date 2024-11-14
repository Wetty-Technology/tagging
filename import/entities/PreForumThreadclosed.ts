import { Column, Entity } from 'typeorm';

@Entity('forum_threadclosed')
export class PreForumThreadclosed {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', {
    name: 'redirect',
    unsigned: true,
    default: () => "'0'",
  })
  redirect: number;
}
