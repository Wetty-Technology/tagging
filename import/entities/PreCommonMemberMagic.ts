import { Column, Entity } from 'typeorm';

@Entity('common_member_magic')
export class PreCommonMemberMagic {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('smallint', {
    primary: true,
    name: 'magicid',
    unsigned: true,
    default: () => "'0'",
  })
  magicid: number;

  @Column('smallint', { name: 'num', unsigned: true, default: () => "'0'" })
  num: number;
}
