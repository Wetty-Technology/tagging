import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid', 'total'], {})
@Entity('forum_hotreply_number')
export class PreForumHotreplyNumber {
  @Column('int', {
    primary: true,
    name: 'pid',
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('smallint', { name: 'support', unsigned: true, default: () => "'0'" })
  support: number;

  @Column('smallint', { name: 'against', unsigned: true, default: () => "'0'" })
  against: number;

  @Column('mediumint', { name: 'total', unsigned: true, default: () => "'0'" })
  total: number;
}
