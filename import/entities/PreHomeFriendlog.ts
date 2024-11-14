import { Column, Entity } from 'typeorm';

@Entity('home_friendlog')
export class PreHomeFriendlog {
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

  @Column('varchar', { name: 'action', length: 10 })
  action: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
