import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('object_id', ['objectId', 'type'], { unique: true })
@Index('type', ['type'], {})
@Entity('pre_home_surrounding_user')
export class PreHomeSurroundingUser {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'poi_id' })
  poiId: string;

  @Column('decimal', { name: 'longitude', precision: 10, scale: 7 })
  longitude: string;

  @Column('decimal', { name: 'latitude', precision: 10, scale: 7 })
  latitude: string;

  @Column('bigint', { name: 'object_id' })
  objectId: string;

  @Column('tinyint', { name: 'type' })
  type: number;

  @Column('varchar', { name: 'location', length: 50 })
  location: string;
}
