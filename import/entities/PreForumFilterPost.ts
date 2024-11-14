import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid', 'postlength'], {})
@Entity('forum_filter_post')
export class PreForumFilterPost {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('int', {
    primary: true,
    name: 'pid',
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column('int', { name: 'postlength', unsigned: true, default: () => "'0'" })
  postlength: number;
}
