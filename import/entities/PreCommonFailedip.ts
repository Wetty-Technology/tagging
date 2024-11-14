import { Column, Entity, Index } from 'typeorm';

@Index('lastupdate', ['lastupdate'], {})
@Entity('common_failedip')
export class PreCommonFailedip {
  @Column('varchar', { primary: true, name: 'ip', length: 45 })
  ip: string;

  @Column('int', {
    primary: true,
    name: 'lastupdate',
    unsigned: true,
    default: () => "'0'",
  })
  lastupdate: number;

  @Column('tinyint', { name: 'count', unsigned: true, default: () => "'0'" })
  count: number;
}
