import { Column, Entity } from 'typeorm';

@Entity('common_patch')
export class PreCommonPatch {
  @Column('varchar', { primary: true, name: 'serial', length: 10 })
  serial: string;

  @Column('mediumtext', { name: 'rule' })
  rule: string;

  @Column('mediumtext', { name: 'note' })
  note: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
