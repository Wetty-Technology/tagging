import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idtype', ['idtype', 'displayorder'], {})
@Entity('pre_home_click')
export class PreHomeClick {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'clickid', unsigned: true })
  clickid: number;

  @Column('char', { name: 'name', length: 50 })
  name: string;

  @Column('char', { name: 'icon', length: 100 })
  icon: string;

  @Column('char', { name: 'idtype', length: 15 })
  idtype: string;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('tinyint', {
    name: 'displayorder',
    unsigned: true,
    default: () => "'0'",
  })
  displayorder: number;
}
