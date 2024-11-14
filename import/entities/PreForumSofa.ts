import { Column, Entity, Index } from 'typeorm';

@Index('ftid', ['fid', 'tid'], {})
@Entity('forum_sofa')
export class PreForumSofa {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;
}
