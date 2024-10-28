import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Index('operation', ['operation'], {})
@Index('relatedid', ['relatedid'], {})
@Index('dateline', ['dateline'], {})
@Entity('pre_common_credit_log')
export class PreCommonCreditLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'logid', unsigned: true })
  logid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'operation', length: 3 })
  operation: string;

  @Column('int', { name: 'relatedid', unsigned: true })
  relatedid: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('int', { name: 'extcredits1' })
  extcredits1: number;

  @Column('int', { name: 'extcredits2' })
  extcredits2: number;

  @Column('int', { name: 'extcredits3' })
  extcredits3: number;

  @Column('int', { name: 'extcredits4' })
  extcredits4: number;

  @Column('int', { name: 'extcredits5' })
  extcredits5: number;

  @Column('int', { name: 'extcredits6' })
  extcredits6: number;

  @Column('int', { name: 'extcredits7' })
  extcredits7: number;

  @Column('int', { name: 'extcredits8' })
  extcredits8: number;
}
