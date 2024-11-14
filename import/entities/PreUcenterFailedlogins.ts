import { Column, Entity } from 'typeorm';

@Entity('ucenter_failedlogins')
export class PreUcenterFailedlogins {
  @Column('varchar', { primary: true, name: 'ip', length: 45 })
  ip: string;

  @Column('tinyint', { name: 'count', unsigned: true, default: () => "'0'" })
  count: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;
}
