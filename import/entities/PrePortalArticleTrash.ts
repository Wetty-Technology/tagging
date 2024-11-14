import { Column, Entity } from 'typeorm';

@Entity('portal_article_trash')
export class PrePortalArticleTrash {
  @Column('mediumint', {
    primary: true,
    name: 'aid',
    unsigned: true,
    default: () => "'0'",
  })
  aid: number;

  @Column('mediumtext', { name: 'content' })
  content: string;
}
