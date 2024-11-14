import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'appid'], {})
@Index('menuorder', ['uid', 'menuorder'], {})
@Index('displayorder', ['uid', 'displayorder'], {})
@Entity('home_userapp')
export class PreHomeUserapp {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('varchar', { name: 'appname', length: 60 })
  appname: string;

  @Column('tinyint', { name: 'privacy', width: 1, default: () => "'0'" })
  privacy: boolean;

  @Column('tinyint', { name: 'allowsidenav', width: 1, default: () => "'0'" })
  allowsidenav: boolean;

  @Column('tinyint', { name: 'allowfeed', width: 1, default: () => "'0'" })
  allowfeed: boolean;

  @Column('tinyint', {
    name: 'allowprofilelink',
    width: 1,
    default: () => "'0'",
  })
  allowprofilelink: boolean;

  @Column('tinyint', { name: 'narrow', width: 1, default: () => "'0'" })
  narrow: boolean;

  @Column('smallint', { name: 'menuorder', default: () => "'0'" })
  menuorder: number;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;
}
