import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('aid', ['aid', 'pageorder'], {})
@Index('pageorder', ['pageorder'], {})
@Entity('portal_article_content')
export class PrePortalArticleContent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;

  @Column('mediumtext', { name: 'content' })
  content: string;

  @Column('smallint', {
    name: 'pageorder',
    unsigned: true,
    default: () => "'0'",
  })
  pageorder: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 255 })
  idtype: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;
}
