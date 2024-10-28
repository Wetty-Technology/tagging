import { Column, Entity } from 'typeorm';

@Entity('pre_common_member_log')
export class PreCommonMemberLog {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('char', { name: 'action', length: 10 })
  action: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
