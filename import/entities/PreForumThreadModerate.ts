import { Column, Entity, Index } from 'typeorm';

@Index('status', ['status', 'dateline'], {})
@Entity('forum_thread_moderate')
export class PreForumThreadModerate {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('tinyint', { name: 'status', default: () => "'0'" })
  status: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
