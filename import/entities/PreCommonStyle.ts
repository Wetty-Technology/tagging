import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_style')
export class PreCommonStyle {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'styleid', unsigned: true })
  styleid: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'1'" })
  available: boolean;

  @Column('smallint', {
    name: 'templateid',
    unsigned: true,
    default: () => "'0'",
  })
  templateid: number;

  @Column('varchar', { name: 'extstyle', length: 255 })
  extstyle: string;
}
