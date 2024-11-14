import { Column, Entity } from 'typeorm';

@Entity('common_member_stat_searchcache')
export class PreCommonMemberStatSearchcache {
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
