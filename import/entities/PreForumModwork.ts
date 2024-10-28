import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('pre_forum_modwork')
export class PreForumModwork {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'modaction', length: 3 })
  modaction: string;

  @Column('date', { name: 'dateline', default: () => "'2006-01-01'" })
  dateline: string;

  @Column('smallint', { name: 'count', unsigned: true, default: () => "'0'" })
  count: number;

  @Column('smallint', { name: 'posts', unsigned: true, default: () => "'0'" })
  posts: number;
}
