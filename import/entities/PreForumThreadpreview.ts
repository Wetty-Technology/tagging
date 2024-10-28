import { Column, Entity } from 'typeorm';

@Entity('pre_forum_threadpreview')
export class PreForumThreadpreview {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('int', { name: 'relay', unsigned: true, default: () => "'0'" })
  relay: number;

  @Column('mediumtext', { name: 'content' })
  content: string;
}
