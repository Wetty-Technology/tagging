import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pmtype', ['pmtype'], {})
@Index('min_max', ['minMax'], {})
@Index('authorid', ['authorid', 'dateline'], {})
@Entity('pre_ucenter_pm_lists')
export class PreUcenterPmLists {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'plid', unsigned: true })
  plid: number;

  @Column('mediumint', {
    name: 'authorid',
    unsigned: true,
    default: () => "'0'",
  })
  authorid: number;

  @Column('tinyint', { name: 'pmtype', unsigned: true, default: () => "'0'" })
  pmtype: number;

  @Column('varchar', { name: 'subject', length: 80 })
  subject: string;

  @Column('smallint', { name: 'members', unsigned: true, default: () => "'0'" })
  members: number;

  @Column('varchar', { name: 'min_max', length: 17 })
  minMax: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'lastmessage' })
  lastmessage: string;
}
