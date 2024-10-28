import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Index('succeed', ['succeed'], {})
@Index('verified', ['verified'], {})
@Entity('pre_common_seccheck')
export class PreCommonSeccheck {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ssid' })
  ssid: number;

  @Column('int', { name: 'dateline' })
  dateline: number;

  @Column('char', { name: 'code', length: 6 })
  code: string;

  @Column('tinyint', { name: 'succeed', width: 1 })
  succeed: boolean;

  @Column('tinyint', { name: 'verified', width: 1 })
  verified: boolean;
}
