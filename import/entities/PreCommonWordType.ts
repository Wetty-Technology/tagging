import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_word_type')
export class PreCommonWordType {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'typename', length: 15 })
  typename: string;
}
