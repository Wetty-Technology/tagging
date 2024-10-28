import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_advertisement')
export class PreCommonAdvertisement {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'advid', unsigned: true })
  advid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('varchar', { name: 'type', length: 50, default: () => "'0'" })
  type: string;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('mediumtext', { name: 'targets' })
  targets: string;

  @Column('mediumtext', { name: 'parameters' })
  parameters: string;

  @Column('mediumtext', { name: 'code' })
  code: string;

  @Column('int', { name: 'starttime', unsigned: true, default: () => "'0'" })
  starttime: number;

  @Column('int', { name: 'endtime', unsigned: true, default: () => "'0'" })
  endtime: number;
}
