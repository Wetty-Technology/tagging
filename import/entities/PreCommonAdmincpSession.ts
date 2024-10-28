import { Column, Entity } from 'typeorm';

@Entity('pre_common_admincp_session')
export class PreCommonAdmincpSession {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('smallint', { name: 'adminid', unsigned: true, default: () => "'0'" })
  adminid: number;

  @Column('tinyint', {
    primary: true,
    name: 'panel',
    width: 1,
    default: () => "'0'",
  })
  panel: boolean;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'errorcount', width: 1, default: () => "'0'" })
  errorcount: boolean;

  @Column('longtext', { name: 'storage' })
  storage: string;
}
