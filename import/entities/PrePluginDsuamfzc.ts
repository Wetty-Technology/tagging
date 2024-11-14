import { Column, Entity } from 'typeorm';

@Entity('plugin_dsuamfzc')
export class PrePluginDsuamfzc {
  @Column('char', { name: 'rid', length: 32 })
  rid: string;

  @Column('char', { name: 'email', length: 40 })
  email: string;

  @Column('int', { name: 'time', unsigned: true, default: () => "'0'" })
  time: number;

  @Column('tinyint', { name: 'yes', width: 1, default: () => "'0'" })
  yes: boolean;
}
