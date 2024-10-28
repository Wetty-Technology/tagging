import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid'], { unique: true })
@Index('fid', ['fid', 'dateline'], {})
@Entity('pre_forum_rsscache')
export class PreForumRsscache {
  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('char', { name: 'forum', length: 50 })
  forum: string;

  @Column('char', { name: 'author', length: 15 })
  author: string;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('char', { name: 'description', length: 255 })
  description: string;

  @Column('char', { name: 'guidetype', length: 10 })
  guidetype: string;
}
