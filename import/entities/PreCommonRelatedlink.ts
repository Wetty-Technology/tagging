import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_relatedlink')
export class PreCommonRelatedlink {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('tinyint', { name: 'extent', default: () => "'0'" })
  extent: number;
}
