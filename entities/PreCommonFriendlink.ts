import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_friendlink')
export class PreCommonFriendlink {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('longtext', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'logo', length: 255 })
  logo: string;

  @Column('tinyint', { name: 'type', default: () => "'0'" })
  type: number;
}
