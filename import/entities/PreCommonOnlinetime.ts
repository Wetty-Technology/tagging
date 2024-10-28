import { Column, Entity } from 'typeorm';

@Entity('pre_common_onlinetime')
export class PreCommonOnlinetime {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('smallint', {
    name: 'thismonth',
    unsigned: true,
    default: () => "'0'",
  })
  thismonth: number;

  @Column('mediumint', { name: 'total', unsigned: true, default: () => "'0'" })
  total: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;
}
