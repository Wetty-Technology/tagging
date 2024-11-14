import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_block_xml')
export class PreCommonBlockXml {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'version', length: 255 })
  version: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('varchar', { name: 'clientid', length: 255 })
  clientid: string;

  @Column('varchar', { name: 'key', length: 255 })
  key: string;

  @Column('varchar', { name: 'signtype', length: 255 })
  signtype: string;

  @Column('mediumtext', { name: 'data' })
  data: string;
}
