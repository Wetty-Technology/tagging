import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('identifier', ['identifier'], { unique: true })
@Entity('pre_common_plugin')
export class PreCommonPlugin {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'pluginid',
    unsigned: true,
  })
  pluginid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('tinyint', { name: 'adminid', unsigned: true, default: () => "'0'" })
  adminid: number;

  @Column('varchar', { name: 'name', length: 40 })
  name: string;

  @Column('varchar', { name: 'identifier', unique: true, length: 40 })
  identifier: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('varchar', { name: 'datatables', length: 255 })
  datatables: string;

  @Column('varchar', { name: 'directory', length: 100 })
  directory: string;

  @Column('varchar', { name: 'copyright', length: 100 })
  copyright: string;

  @Column('mediumtext', { name: 'modules' })
  modules: string;

  @Column('varchar', { name: 'version', length: 20 })
  version: string;
}
