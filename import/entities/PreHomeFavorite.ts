import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idtype', ['id', 'idtype'], {})
@Index('uid', ['uid', 'idtype', 'dateline'], {})
@Entity('pre_home_favorite')
export class PreHomeFavorite {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'favid', unsigned: true })
  favid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 255 })
  idtype: string;

  @Column('mediumint', {
    name: 'spaceuid',
    unsigned: true,
    default: () => "'0'",
  })
  spaceuid: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('mediumtext', { name: 'description' })
  description: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
