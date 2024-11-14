import { Column, Entity, Index } from 'typeorm';

@Index('fid', ['fid'], {})
@Index('dateline', ['dateline'], {})
@Entity('forum_newthread')
export class PreForumNewthread {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
