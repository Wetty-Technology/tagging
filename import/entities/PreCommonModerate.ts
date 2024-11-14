import { Column, Entity, Index } from 'typeorm';

@Index('idtype', ['idtype', 'status', 'dateline'], {})
@Entity('common_moderate')
export class PreCommonModerate {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('varchar', { primary: true, name: 'idtype', length: 15 })
  idtype: string;

  @Column('tinyint', { name: 'status', default: () => "'0'" })
  status: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
