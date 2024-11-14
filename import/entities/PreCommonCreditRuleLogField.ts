import { Column, Entity } from 'typeorm';

@Entity('common_credit_rule_log_field')
export class PreCommonCreditRuleLogField {
  @Column('mediumint', {
    primary: true,
    name: 'clid',
    unsigned: true,
    default: () => "'0'",
  })
  clid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumtext', { name: 'info' })
  info: string;

  @Column('mediumtext', { name: 'user' })
  user: string;

  @Column('mediumtext', { name: 'app' })
  app: string;
}
