import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['tid', 'uid'], { unique: true })
@Entity('forum_threadhidelog')
export class PreForumThreadhidelog {
  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;
}
