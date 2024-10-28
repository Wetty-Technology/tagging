import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_home_album_category')
export class PreHomeAlbumCategory {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'catid', unsigned: true })
  catid: number;

  @Column('mediumint', { name: 'upid', unsigned: true, default: () => "'0'" })
  upid: number;

  @Column('varchar', { name: 'catname', length: 255 })
  catname: string;

  @Column('mediumint', { name: 'num', unsigned: true, default: () => "'0'" })
  num: number;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;
}
