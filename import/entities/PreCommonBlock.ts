import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_block')
export class PreCommonBlock {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'bid', unsigned: true })
  bid: number;

  @Column('varchar', { name: 'blockclass', length: 255, default: () => "'0'" })
  blockclass: string;

  @Column('tinyint', { name: 'blocktype', width: 1, default: () => "'0'" })
  blocktype: boolean;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('mediumtext', { name: 'title' })
  title: string;

  @Column('varchar', { name: 'classname', length: 255 })
  classname: string;

  @Column('mediumtext', { name: 'summary' })
  summary: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('smallint', { name: 'styleid', unsigned: true, default: () => "'0'" })
  styleid: number;

  @Column('mediumint', {
    name: 'picwidth',
    unsigned: true,
    default: () => "'0'",
  })
  picwidth: number;

  @Column('mediumint', {
    name: 'picheight',
    unsigned: true,
    default: () => "'0'",
  })
  picheight: number;

  @Column('varchar', { name: 'target', length: 255 })
  target: string;

  @Column('varchar', { name: 'script', length: 255 })
  script: string;

  @Column('mediumtext', { name: 'param' })
  param: string;

  @Column('smallint', { name: 'shownum', unsigned: true, default: () => "'0'" })
  shownum: number;

  @Column('int', { name: 'cachetime', default: () => "'0'" })
  cachetime: number;

  @Column('char', { name: 'cachetimerange', length: 5 })
  cachetimerange: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'blockstyle' })
  blockstyle: string;

  @Column('varchar', { name: 'dateformat', length: 255 })
  dateformat: string;

  @Column('tinyint', { name: 'dateuformat', width: 1, default: () => "'0'" })
  dateuformat: boolean;

  @Column('tinyint', { name: 'punctualupdate', width: 1, default: () => "'0'" })
  punctualupdate: boolean;

  @Column('tinyint', { name: 'hidedisplay', width: 1, default: () => "'0'" })
  hidedisplay: boolean;

  @Column('tinyint', { name: 'notinherited', width: 1, default: () => "'0'" })
  notinherited: boolean;

  @Column('tinyint', { name: 'isblank', width: 1, default: () => "'0'" })
  isblank: boolean;
}
