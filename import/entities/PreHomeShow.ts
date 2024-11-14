import { Column, Entity, Index } from 'typeorm';

@Index('credit', ['credit'], {})
@Index('unitprice', ['unitprice'], {})
@Entity('home_show')
export class PreHomeShow {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;

  @Column('varchar', { name: 'note', length: 100 })
  note: string;

  @Column('int', { name: 'unitprice', unsigned: true, default: () => "'1'" })
  unitprice: number;
}
