import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pluginid', ['pluginid'], {})
@Entity('common_pluginvar')
export class PreCommonPluginvar {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'pluginvarid',
    unsigned: true,
  })
  pluginvarid: number;

  @Column('smallint', {
    name: 'pluginid',
    unsigned: true,
    default: () => "'0'",
  })
  pluginid: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'title', length: 100 })
  title: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('varchar', { name: 'variable', length: 40 })
  variable: string;

  @Column('varchar', { name: 'type', length: 20, default: () => "'text'" })
  type: string;

  @Column('mediumtext', { name: 'value' })
  value: string;

  @Column('mediumtext', { name: 'extra' })
  extra: string;
}
