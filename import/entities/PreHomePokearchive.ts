import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pokeuid', ['pokeuid'], {})
@Entity('pre_home_pokearchive')
export class PreHomePokearchive {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'pid' })
  pid: number;

  @Column('int', { name: 'pokeuid', unsigned: true, default: () => "'0'" })
  pokeuid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', {
    name: 'fromuid',
    unsigned: true,
    default: () => "'0'",
  })
  fromuid: number;

  @Column('varchar', { name: 'note', length: 255 })
  note: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('smallint', { name: 'iconid', unsigned: true, default: () => "'0'" })
  iconid: number;
}
