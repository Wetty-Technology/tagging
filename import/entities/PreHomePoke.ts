import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('pre_home_poke')
export class PreHomePoke {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'fromuid',
    unsigned: true,
    default: () => "'0'",
  })
  fromuid: number;

  @Column('varchar', { name: 'fromusername', length: 15 })
  fromusername: string;

  @Column('varchar', { name: 'note', length: 255 })
  note: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('smallint', { name: 'iconid', unsigned: true, default: () => "'0'" })
  iconid: number;
}
