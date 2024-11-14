import { Column, Entity, Index } from 'typeorm';

@Index('vuid', ['vuid'], {})
@Index('dateline', ['dateline'], {})
@Entity('home_visitor')
export class PreHomeVisitor {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'vuid',
    unsigned: true,
    default: () => "'0'",
  })
  vuid: number;

  @Column('char', { name: 'vusername', length: 15 })
  vusername: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
