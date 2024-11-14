import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('identifier', ['identifier'], { unique: true })
@Index('displayorder', ['available', 'displayorder'], {})
@Entity('common_magic')
export class PreCommonMagic {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'magicid', unsigned: true })
  magicid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'identifier', unique: true, length: 40 })
  identifier: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('mediumint', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;

  @Column('smallint', { name: 'num', unsigned: true, default: () => "'0'" })
  num: number;

  @Column('smallint', {
    name: 'salevolume',
    unsigned: true,
    default: () => "'0'",
  })
  salevolume: number;

  @Column('tinyint', { name: 'supplytype', width: 1, default: () => "'0'" })
  supplytype: boolean;

  @Column('smallint', {
    name: 'supplynum',
    unsigned: true,
    default: () => "'0'",
  })
  supplynum: number;

  @Column('tinyint', { name: 'useperoid', width: 1, default: () => "'0'" })
  useperoid: boolean;

  @Column('smallint', { name: 'usenum', unsigned: true, default: () => "'0'" })
  usenum: number;

  @Column('tinyint', { name: 'weight', unsigned: true, default: () => "'1'" })
  weight: number;

  @Column('mediumtext', { name: 'magicperm' })
  magicperm: string;

  @Column('tinyint', { name: 'useevent', width: 1, default: () => "'0'" })
  useevent: boolean;

  @Column('tinyint', { name: 'credit', width: 1, default: () => "'0'" })
  credit: boolean;
}
