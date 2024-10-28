import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('pre_common_block_permission')
export class PreCommonBlockPermission {
  @Column('mediumint', {
    primary: true,
    name: 'bid',
    unsigned: true,
    default: () => "'0'",
  })
  bid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('tinyint', { name: 'allowdata', width: 1, default: () => "'0'" })
  allowdata: boolean;

  @Column('tinyint', { name: 'allowsetting', width: 1, default: () => "'0'" })
  allowsetting: boolean;

  @Column('tinyint', { name: 'allowmanage', width: 1, default: () => "'0'" })
  allowmanage: boolean;

  @Column('tinyint', { name: 'allowrecommend', width: 1, default: () => "'0'" })
  allowrecommend: boolean;

  @Column('tinyint', { name: 'needverify', width: 1, default: () => "'0'" })
  needverify: boolean;

  @Column('varchar', { name: 'inheritedtplname', length: 255 })
  inheritedtplname: string;
}
