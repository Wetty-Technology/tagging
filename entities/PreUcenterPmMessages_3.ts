import { Column, Entity, Index } from 'typeorm';

@Index('plid', ['plid', 'delstatus', 'dateline'], {})
@Index('dateline', ['plid', 'dateline'], {})
@Entity('pre_ucenter_pm_messages_3')
export class PreUcenterPmMessages_3 {
  @Column('mediumint', {
    primary: true,
    name: 'pmid',
    unsigned: true,
    default: () => "'0'",
  })
  pmid: number;

  @Column('mediumint', { name: 'plid', unsigned: true, default: () => "'0'" })
  plid: number;

  @Column('mediumint', {
    name: 'authorid',
    unsigned: true,
    default: () => "'0'",
  })
  authorid: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('tinyint', {
    name: 'delstatus',
    unsigned: true,
    default: () => "'0'",
  })
  delstatus: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
