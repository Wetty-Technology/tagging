import { Column, Entity, Index } from 'typeorm';

@Index('fuid', ['fuid'], {})
@Index('uid', ['uid', 'num', 'dateline'], {})
@Entity('home_friend')
export class PreHomeFriend {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'fuid',
    unsigned: true,
    default: () => "'0'",
  })
  fuid: number;

  @Column('varchar', { name: 'fusername', length: 15 })
  fusername: string;

  @Column('smallint', { name: 'gid', unsigned: true, default: () => "'0'" })
  gid: number;

  @Column('mediumint', { name: 'num', unsigned: true, default: () => "'0'" })
  num: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'note', length: 255 })
  note: string;
}
