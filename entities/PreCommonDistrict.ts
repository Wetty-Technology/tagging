import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('upid', ['upid', 'displayorder'], {})
@Entity('pre_common_district')
export class PreCommonDistrict {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('tinyint', { name: 'level', unsigned: true, default: () => "'0'" })
  level: number;

  @Column('mediumint', { name: 'upid', unsigned: true, default: () => "'0'" })
  upid: number;

  @Column('tinyint', { name: 'usetype', unsigned: true, default: () => "'0'" })
  usetype: number;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;
}
