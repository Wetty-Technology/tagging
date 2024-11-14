import { Column, Entity, Index } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Entity('common_card')
export class PreCommonCard {
  @Column('varchar', { primary: true, name: 'id', length: 190 })
  id: string;

  @Column('smallint', { name: 'typeid', unsigned: true, default: () => "'1'" })
  typeid: number;

  @Column('tinyint', { name: 'maketype', width: 1, default: () => "'0'" })
  maketype: boolean;

  @Column('mediumint', {
    name: 'makeruid',
    unsigned: true,
    default: () => "'0'",
  })
  makeruid: number;

  @Column('mediumint', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;

  @Column('tinyint', { name: 'extcreditskey', width: 1, default: () => "'0'" })
  extcreditskey: boolean;

  @Column('int', { name: 'extcreditsval', default: () => "'0'" })
  extcreditsval: number;

  @Column('tinyint', { name: 'status', unsigned: true, default: () => "'1'" })
  status: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', {
    name: 'cleardateline',
    unsigned: true,
    default: () => "'0'",
  })
  cleardateline: number;

  @Column('int', { name: 'useddateline', unsigned: true, default: () => "'0'" })
  useddateline: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;
}
