import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_word')
export class PreCommonWord {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'admin', length: 15 })
  admin: string;

  @Column('varchar', { name: 'find', length: 255 })
  find: string;

  @Column('varchar', { name: 'replacement', length: 255 })
  replacement: string;

  @Column('varchar', { name: 'extra', length: 255 })
  extra: string;

  @Column('smallint', { name: 'type', default: () => "'1'" })
  type: number;
}
