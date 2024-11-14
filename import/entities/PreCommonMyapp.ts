import { Column, Entity, Index } from 'typeorm';

@Index('flag', ['flag', 'displayorder'], {})
@Entity('common_myapp')
export class PreCommonMyapp {
  @Column('mediumint', {
    primary: true,
    name: 'appid',
    unsigned: true,
    default: () => "'0'",
  })
  appid: number;

  @Column('varchar', { name: 'appname', length: 60 })
  appname: string;

  @Column('tinyint', { name: 'narrow', width: 1, default: () => "'0'" })
  narrow: boolean;

  @Column('tinyint', { name: 'flag', width: 1, default: () => "'0'" })
  flag: boolean;

  @Column('mediumint', {
    name: 'version',
    unsigned: true,
    default: () => "'0'",
  })
  version: number;

  @Column('tinyint', { name: 'userpanelarea', width: 1, default: () => "'0'" })
  userpanelarea: boolean;

  @Column('varchar', { name: 'canvastitle', length: 60 })
  canvastitle: string;

  @Column('tinyint', { name: 'fullscreen', width: 1, default: () => "'0'" })
  fullscreen: boolean;

  @Column('tinyint', {
    name: 'displayuserpanel',
    width: 1,
    default: () => "'0'",
  })
  displayuserpanel: boolean;

  @Column('tinyint', { name: 'displaymethod', width: 1, default: () => "'0'" })
  displaymethod: boolean;

  @Column('smallint', {
    name: 'displayorder',
    unsigned: true,
    default: () => "'0'",
  })
  displayorder: number;

  @Column('tinyint', { name: 'iconstatus', default: () => "'0'" })
  iconstatus: number;

  @Column('int', { name: 'icondowntime', unsigned: true, default: () => "'0'" })
  icondowntime: number;

  @Column('tinyint', { name: 'appstatus', default: () => "'0'" })
  appstatus: number;
}
