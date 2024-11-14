import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('aid', ['aid', 'displayorder'], {})
@Entity('portal_article_related')
export class PrePortalArticleRelated {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'aid', unsigned: true })
  aid: number;

  @Column('mediumint', {
    primary: true,
    name: 'raid',
    unsigned: true,
    default: () => "'0'",
  })
  raid: number;

  @Column('mediumint', {
    name: 'displayorder',
    unsigned: true,
    default: () => "'0'",
  })
  displayorder: number;
}
