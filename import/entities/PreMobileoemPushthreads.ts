import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'type', 'dateline'], {})
@Entity('mobileoem_pushthreads')
export class PreMobileoemPushthreads {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('tinyint', {
    primary: true,
    name: 'type',
    unsigned: true,
    default: () => "'0'",
  })
  type: number;

  @Column('mediumint', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
