import { Column, Entity, Index } from 'typeorm';

@Index('aid', ['aid'], { unique: true })
@Index('catid', ['catid', 'dateline'], {})
@Entity('pre_portal_rsscache')
export class PrePortalRsscache {
  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('mediumint', { name: 'catid', unsigned: true, default: () => "'0'" })
  catid: number;

  @Column('mediumint', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('char', { name: 'catname', length: 50 })
  catname: string;

  @Column('char', { name: 'author', length: 15 })
  author: string;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('char', { name: 'description', length: 255 })
  description: string;
}
