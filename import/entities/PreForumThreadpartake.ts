import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid', 'uid'], {})
@Entity('pre_forum_threadpartake')
export class PreForumThreadpartake {
  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
