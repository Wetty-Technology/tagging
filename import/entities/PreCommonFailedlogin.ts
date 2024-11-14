import { Column, Entity } from 'typeorm';

@Entity('common_failedlogin')
export class PreCommonFailedlogin {
  @Column('varchar', { primary: true, name: 'ip', length: 45 })
  ip: string;

  @Column('char', { primary: true, name: 'username', length: 32 })
  username: string;

  @Column('tinyint', { name: 'count', unsigned: true, default: () => "'0'" })
  count: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;
}
