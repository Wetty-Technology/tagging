import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('bid', ['bid'], {})
@Entity('common_block_item')
export class PreCommonBlockItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'itemid', unsigned: true })
  itemid: number;

  @Column('mediumint', { name: 'bid', unsigned: true, default: () => "'0'" })
  bid: number;

  @Column('int', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 255 })
  idtype: string;

  @Column('tinyint', { name: 'itemtype', width: 1, default: () => "'0'" })
  itemtype: boolean;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('varchar', { name: 'pic', length: 255 })
  pic: string;

  @Column('tinyint', { name: 'picflag', width: 1, default: () => "'0'" })
  picflag: boolean;

  @Column('tinyint', { name: 'makethumb', width: 1, default: () => "'0'" })
  makethumb: boolean;

  @Column('mediumtext', { name: 'summary' })
  summary: string;

  @Column('mediumtext', { name: 'showstyle' })
  showstyle: string;

  @Column('mediumtext', { name: 'related' })
  related: string;

  @Column('mediumtext', { name: 'fields' })
  fields: string;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('int', { name: 'startdate', unsigned: true, default: () => "'0'" })
  startdate: number;

  @Column('int', { name: 'enddate', unsigned: true, default: () => "'0'" })
  enddate: number;

  @Column('varchar', { name: 'thumbpath', length: 255 })
  thumbpath: string;
}
