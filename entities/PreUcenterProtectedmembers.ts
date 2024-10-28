import { Column, Entity, Index } from 'typeorm';

@Index('username', ['username', 'appid'], { unique: true })
@Entity('pre_ucenter_protectedmembers')
export class PreUcenterProtectedmembers {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('tinyint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('char', { name: 'admin', length: 10, default: () => "'0'" })
  admin: string;
}
