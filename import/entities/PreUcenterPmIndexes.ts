import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('plid', ['plid'], {})
@Entity('pre_ucenter_pm_indexes')
export class PreUcenterPmIndexes {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'pmid', unsigned: true })
  pmid: number;

  @Column('mediumint', { name: 'plid', unsigned: true, default: () => "'0'" })
  plid: number;
}
