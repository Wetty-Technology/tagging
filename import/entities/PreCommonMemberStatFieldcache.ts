import { Column, Entity } from 'typeorm';

@Entity('common_member_stat_fieldcache')
export class PreCommonMemberStatFieldcache {
  @Column('mediumint', {
    primary: true,
    name: 'optionid',
    unsigned: true,
    default: () => "'0'",
  })
  optionid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;
}
