import { Column, Entity, Index } from 'typeorm';

@Index('optionid', ['sortid', 'optionid'], { unique: true })
@Index('sortid', ['sortid'], {})
@Entity('forum_typevar')
export class PreForumTypevar {
  @Column('smallint', { name: 'sortid', default: () => "'0'" })
  sortid: number;

  @Column('smallint', { name: 'optionid', default: () => "'0'" })
  optionid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('tinyint', { name: 'required', width: 1, default: () => "'0'" })
  required: boolean;

  @Column('tinyint', { name: 'unchangeable', width: 1, default: () => "'0'" })
  unchangeable: boolean;

  @Column('tinyint', { name: 'search', width: 1, default: () => "'0'" })
  search: boolean;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('tinyint', { name: 'subjectshow', width: 1, default: () => "'0'" })
  subjectshow: boolean;
}
