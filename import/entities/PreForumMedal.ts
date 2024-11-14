import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('displayorder', ['displayorder'], {})
@Index('available', ['available', 'displayorder'], {})
@Entity('forum_medal')
export class PreForumMedal {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'medalid', unsigned: true })
  medalid: number;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('varchar', { name: 'image', length: 255 })
  image: string;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('smallint', {
    name: 'expiration',
    unsigned: true,
    default: () => "'0'",
  })
  expiration: number;

  @Column('longtext', { name: 'permission' })
  permission: string;

  @Column('tinyint', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;

  @Column('mediumint', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;
}
