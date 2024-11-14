import { Column, Entity } from 'typeorm';

@Entity('common_remote_port')
export class PreCommonRemotePort {
  @Column('mediumint', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('char', { primary: true, name: 'idtype', length: 15 })
  idtype: string;

  @Column('char', { name: 'useip', length: 15 })
  useip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;
}
