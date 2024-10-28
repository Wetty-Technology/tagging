import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('styleid', ['styleid'], {})
@Entity('pre_common_stylevar')
export class PreCommonStylevar {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'stylevarid',
    unsigned: true,
  })
  stylevarid: number;

  @Column('smallint', { name: 'styleid', unsigned: true, default: () => "'0'" })
  styleid: number;

  @Column('mediumtext', { name: 'variable' })
  variable: string;

  @Column('mediumtext', { name: 'substitute' })
  substitute: string;
}
