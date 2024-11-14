import { Column, Entity } from 'typeorm';

@Entity('common_cache')
export class PreCommonCache {
  @Column('varchar', { primary: true, name: 'cachekey', length: 190 })
  cachekey: string;

  @Column('mediumblob', { name: 'cachevalue' })
  cachevalue: Buffer;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
