import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('rid', ['rid'], {})
@Index('available', ['available', 'displayorder'], {})
@Index('must', ['must'], {})
@Entity('research_item')
export class PreResearchItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '???ID' })
  id: number;

  @Column('int', { name: 'rid', comment: '????ID' })
  rid: number;

  @Column('varchar', { name: 'subject', comment: '???????', length: 255 })
  subject: string;

  @Column('mediumtext', { name: 'select', comment: '??????' })
  select: string;

  @Column('mediumtext', { name: 'select2', comment: '??????' })
  select2: string;

  @Column('enum', {
    name: 'type',
    comment: '???????',
    enum: ['r', 'm', 't', 'a', 's', 'rt', 'mt', 'rs', 'rst', 'rc'],
  })
  type: 'r' | 'm' | 't' | 'a' | 's' | 'rt' | 'mt' | 'rs' | 'rst' | 'rc';

  @Column('tinyint', { name: 'must', comment: '??????', width: 1 })
  must: boolean;

  @Column('tinyint', { name: 'available', comment: '???????', width: 1 })
  available: boolean;

  @Column('mediumint', { name: 'displayorder', comment: '??????' })
  displayorder: number;
}
