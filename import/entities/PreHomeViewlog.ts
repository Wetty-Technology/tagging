import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home_viewlog')
export class PreHomeViewlog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'logid', unsigned: true })
  logid: number;

  @Column('mediumint', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('char', { name: 'idtype', length: 20 })
  idtype: string;
}
