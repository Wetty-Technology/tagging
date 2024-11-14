import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('navtype', ['navtype'], {})
@Entity('common_nav')
export class PreCommonNav {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('smallint', {
    name: 'parentid',
    unsigned: true,
    default: () => "'0'",
  })
  parentid: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('varchar', { name: 'identifier', length: 255 })
  identifier: string;

  @Column('tinyint', { name: 'target', width: 1, default: () => "'0'" })
  target: boolean;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('tinyint', { name: 'displayorder' })
  displayorder: number;

  @Column('tinyint', { name: 'highlight', width: 1, default: () => "'0'" })
  highlight: boolean;

  @Column('tinyint', { name: 'level', width: 1, default: () => "'0'" })
  level: boolean;

  @Column('tinyint', { name: 'subtype', width: 1, default: () => "'0'" })
  subtype: boolean;

  @Column('tinyint', { name: 'subcols', width: 1, default: () => "'0'" })
  subcols: boolean;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('varchar', { name: 'subname', length: 255 })
  subname: string;

  @Column('varchar', { name: 'suburl', length: 255 })
  suburl: string;

  @Column('tinyint', { name: 'navtype', width: 1, default: () => "'0'" })
  navtype: boolean;

  @Column('varchar', { name: 'logo', length: 255 })
  logo: string;
}
