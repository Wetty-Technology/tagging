import { Column, Entity } from 'typeorm';

@Entity('common_addon')
export class PreCommonAddon {
  @Column('varchar', { primary: true, name: 'key', length: 255 })
  key: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'sitename', length: 255 })
  sitename: string;

  @Column('varchar', { name: 'siteurl', length: 255 })
  siteurl: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('varchar', { name: 'contact', length: 255 })
  contact: string;

  @Column('varchar', { name: 'logo', length: 255 })
  logo: string;

  @Column('tinyint', { name: 'system', width: 1, default: () => "'0'" })
  system: boolean;
}
