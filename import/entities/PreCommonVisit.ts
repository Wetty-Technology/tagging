import { Column, Entity, Index } from 'typeorm';

@Index('ip', ['ip', 'view'], {})
@Entity('pre_common_visit')
export class PreCommonVisit {
  @Column('varchar', { primary: true, name: 'ip', length: 45 })
  ip: string;

  @Column('int', { name: 'view', unsigned: true, default: () => "'0'" })
  view: number;
}
