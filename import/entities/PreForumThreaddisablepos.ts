import { Column, Entity } from 'typeorm';

@Entity('forum_threaddisablepos')
export class PreForumThreaddisablepos {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;
}
