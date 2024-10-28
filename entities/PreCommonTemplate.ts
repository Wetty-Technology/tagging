import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_template')
export class PreCommonTemplate {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'templateid',
    unsigned: true,
  })
  templateid: number;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('varchar', { name: 'directory', length: 100 })
  directory: string;

  @Column('varchar', { name: 'copyright', length: 100 })
  copyright: string;
}
