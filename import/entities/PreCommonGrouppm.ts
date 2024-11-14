import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_grouppm')
export class PreCommonGrouppm {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('mediumint', {
    name: 'authorid',
    unsigned: true,
    default: () => "'0'",
  })
  authorid: number;

  @Column('varchar', { name: 'author', length: 15 })
  author: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('mediumint', {
    name: 'numbers',
    unsigned: true,
    default: () => "'0'",
  })
  numbers: number;
}
