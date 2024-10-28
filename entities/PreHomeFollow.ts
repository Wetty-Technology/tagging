import { Column, Entity } from 'typeorm';

@Entity('pre_home_follow')
export class PreHomeFollow {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('mediumint', {
    primary: true,
    name: 'followuid',
    unsigned: true,
    default: () => "'0'",
  })
  followuid: number;

  @Column('char', { name: 'fusername', length: 15 })
  fusername: string;

  @Column('varchar', { name: 'bkname', length: 255 })
  bkname: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('tinyint', { name: 'mutual', width: 1, default: () => "'0'" })
  mutual: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
