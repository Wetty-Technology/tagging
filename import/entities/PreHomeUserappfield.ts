import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'appid'], {})
@Entity('home_userappfield')
export class PreHomeUserappfield {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('mediumtext', { name: 'profilelink' })
  profilelink: string;

  @Column('mediumtext', { name: 'myml' })
  myml: string;
}
