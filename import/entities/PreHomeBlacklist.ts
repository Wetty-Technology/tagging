import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('home_blacklist')
export class PreHomeBlacklist {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'buid',
    unsigned: true,
    default: () => "'0'",
  })
  buid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
