import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('taskid', ['taskid'], {})
@Entity('common_taskvar')
export class PreCommonTaskvar {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'taskvarid',
    unsigned: true,
  })
  taskvarid: number;

  @Column('smallint', { name: 'taskid', unsigned: true, default: () => "'0'" })
  taskid: number;

  @Column('enum', {
    name: 'sort',
    enum: ['apply', 'complete'],
    default: () => "'complete'",
  })
  sort: 'apply' | 'complete';

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('varchar', { name: 'variable', length: 40 })
  variable: string;

  @Column('varchar', { name: 'type', length: 20, default: () => "'text'" })
  type: string;

  @Column('mediumtext', { name: 'value' })
  value: string;
}
