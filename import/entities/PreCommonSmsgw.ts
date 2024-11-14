import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_smsgw')
export class PreCommonSmsgw {
  @PrimaryGeneratedColumn({ type: 'int', name: 'smsgwid', unsigned: true })
  smsgwid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('int', { name: 'type', default: () => "'0'" })
  type: number;

  @Column('int', { name: 'order', default: () => "'0'" })
  order: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'class', length: 255, default: () => "'0'" })
  class: string;

  @Column('text', { name: 'sendrule' })
  sendrule: string;

  @Column('text', { name: 'parameters' })
  parameters: string;
}
