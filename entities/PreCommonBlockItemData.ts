import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('bid', ['bid', 'stickgrade', 'displayorder', 'verifiedtime'], {})
@Entity('pre_common_block_item_data')
export class PreCommonBlockItemData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'dataid', unsigned: true })
  dataid: number;

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

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'isverified', width: 1, default: () => "'0'" })
  isverified: boolean;

  @Column('int', { name: 'verifiedtime', unsigned: true, default: () => "'0'" })
  verifiedtime: number;

  @Column('tinyint', {
    name: 'stickgrade',
    unsigned: true,
    default: () => "'0'",
  })
  stickgrade: number;
}
