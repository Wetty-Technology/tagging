import { Column, Entity, Index } from 'typeorm';

@Index('today', ['today'], {})
@Entity('pre_forum_groupranking')
export class PreForumGroupranking {
  @Column('mediumint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('smallint', {
    name: 'yesterday',
    unsigned: true,
    default: () => "'0'",
  })
  yesterday: number;

  @Column('smallint', { name: 'today', unsigned: true, default: () => "'0'" })
  today: number;

  @Column('tinyint', { name: 'trend', width: 1, default: () => "'0'" })
  trend: boolean;
}
