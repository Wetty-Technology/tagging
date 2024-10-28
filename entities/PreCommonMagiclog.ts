import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Index('action', ['action'], {})
@Index('targetuid', ['targetuid', 'dateline'], {})
@Index('magicid', ['magicid', 'dateline'], {})
@Entity('pre_common_magiclog')
export class PreCommonMagiclog {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('smallint', { name: 'magicid', unsigned: true, default: () => "'0'" })
  magicid: number;

  @Column('tinyint', { name: 'action', width: 1, default: () => "'0'" })
  action: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('smallint', { name: 'amount', unsigned: true, default: () => "'0'" })
  amount: number;

  @Column('mediumint', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;

  @Column('int', { name: 'targetid', unsigned: true, default: () => "'0'" })
  targetid: number;

  @Column('char', { name: 'idtype', nullable: true, length: 6 })
  idtype: string | null;

  @Column('mediumint', {
    name: 'targetuid',
    unsigned: true,
    default: () => "'0'",
  })
  targetuid: number;

  @Column('tinyint', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;
}
