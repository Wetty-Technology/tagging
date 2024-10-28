import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_card_type')
export class PreCommonCardType {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id' })
  id: number;

  @Column('char', { name: 'typename', length: 20 })
  typename: string;
}
