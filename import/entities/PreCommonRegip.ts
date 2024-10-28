import { Column, Entity, Index } from 'typeorm';

@Index('ip', ['ip'], {})
@Entity('pre_common_regip')
export class PreCommonRegip {
  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('smallint', { name: 'count', default: () => "'0'" })
  count: number;
}
