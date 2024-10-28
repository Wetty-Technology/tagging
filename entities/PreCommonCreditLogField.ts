import { Column, Entity, Index } from 'typeorm';

@Index('logid', ['logid'], {})
@Entity('pre_common_credit_log_field')
export class PreCommonCreditLogField {
  @Column('mediumint', { name: 'logid', unsigned: true })
  logid: number;

  @Column('varchar', { name: 'title', length: 100 })
  title: string;

  @Column('mediumtext', { name: 'text' })
  text: string;
}
