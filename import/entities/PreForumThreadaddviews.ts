import { Column, Entity } from 'typeorm';

@Entity('forum_threadaddviews')
export class PreForumThreadaddviews {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('int', { name: 'addviews', unsigned: true, default: () => "'0'" })
  addviews: number;
}
