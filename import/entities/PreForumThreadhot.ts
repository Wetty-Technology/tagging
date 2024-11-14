import { Column, Entity, Index } from 'typeorm';

@Index('fid', ['fid'], {})
@Entity('forum_threadhot')
export class PreForumThreadhot {
  @Column('mediumint', {
    primary: true,
    name: 'cid',
    unsigned: true,
    default: () => "'0'",
  })
  cid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;
}
