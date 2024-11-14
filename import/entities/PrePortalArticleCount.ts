import { Column, Entity } from 'typeorm';

@Entity('portal_article_count')
export class PrePortalArticleCount {
  @Column('mediumint', {
    primary: true,
    name: 'aid',
    unsigned: true,
    default: () => "'0'",
  })
  aid: number;

  @Column('mediumint', { name: 'catid', unsigned: true, default: () => "'0'" })
  catid: number;

  @Column('mediumint', {
    name: 'viewnum',
    unsigned: true,
    default: () => "'0'",
  })
  viewnum: number;

  @Column('mediumint', {
    name: 'commentnum',
    unsigned: true,
    default: () => "'0'",
  })
  commentnum: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumint', {
    name: 'favtimes',
    unsigned: true,
    default: () => "'0'",
  })
  favtimes: number;

  @Column('mediumint', {
    name: 'sharetimes',
    unsigned: true,
    default: () => "'0'",
  })
  sharetimes: number;
}
