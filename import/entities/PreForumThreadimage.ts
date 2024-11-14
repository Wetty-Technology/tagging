import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid'], {})
@Entity('forum_threadimage')
export class PreForumThreadimage {
  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('varchar', { name: 'attachment', length: 255 })
  attachment: string;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;
}
