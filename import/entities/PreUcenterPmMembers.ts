import { Column, Entity, Index } from 'typeorm';

@Index('isnew', ['isnew'], {})
@Index('lastdateline', ['uid', 'lastdateline'], {})
@Index('lastupdate', ['uid', 'lastupdate'], {})
@Entity('ucenter_pm_members')
export class PreUcenterPmMembers {
  @Column('mediumint', {
    primary: true,
    name: 'plid',
    unsigned: true,
    default: () => "'0'",
  })
  plid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('tinyint', { name: 'isnew', unsigned: true, default: () => "'0'" })
  isnew: number;

  @Column('int', { name: 'pmnum', unsigned: true, default: () => "'0'" })
  pmnum: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('int', { name: 'lastdateline', unsigned: true, default: () => "'0'" })
  lastdateline: number;
}
