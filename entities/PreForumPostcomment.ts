import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tid', ['tid'], {})
@Index('authorid', ['authorid'], {})
@Index('score', ['score'], {})
@Index('pid', ['pid', 'dateline'], {})
@Index('rpid', ['rpid'], {})
@Entity('pre_forum_postcomment')
export class PreForumPostcomment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', { name: 'pid', unsigned: true, default: () => "'0'" })
  pid: number;

  @Column('varchar', { name: 'author', length: 15 })
  author: string;

  @Column('mediumint', { name: 'authorid', default: () => "'0'" })
  authorid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'comment', length: 255 })
  comment: string;

  @Column('tinyint', { name: 'score', width: 1, default: () => "'0'" })
  score: boolean;

  @Column('varchar', { name: 'useip', length: 45 })
  useip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('int', { name: 'rpid', unsigned: true, default: () => "'0'" })
  rpid: number;
}
