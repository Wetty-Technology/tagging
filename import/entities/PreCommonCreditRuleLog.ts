import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'rid', 'fid'], {})
@Index('dateline', ['dateline'], {})
@Entity('common_credit_rule_log')
export class PreCommonCreditRuleLog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'clid', unsigned: true })
  clid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'rid', unsigned: true, default: () => "'0'" })
  rid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('mediumint', { name: 'total', unsigned: true, default: () => "'0'" })
  total: number;

  @Column('mediumint', {
    name: 'cyclenum',
    unsigned: true,
    default: () => "'0'",
  })
  cyclenum: number;

  @Column('int', { name: 'extcredits1', default: () => "'0'" })
  extcredits1: number;

  @Column('int', { name: 'extcredits2', default: () => "'0'" })
  extcredits2: number;

  @Column('int', { name: 'extcredits3', default: () => "'0'" })
  extcredits3: number;

  @Column('int', { name: 'extcredits4', default: () => "'0'" })
  extcredits4: number;

  @Column('int', { name: 'extcredits5', default: () => "'0'" })
  extcredits5: number;

  @Column('int', { name: 'extcredits6', default: () => "'0'" })
  extcredits6: number;

  @Column('int', { name: 'extcredits7', default: () => "'0'" })
  extcredits7: number;

  @Column('int', { name: 'extcredits8', default: () => "'0'" })
  extcredits8: number;

  @Column('int', { name: 'starttime', unsigned: true, default: () => "'0'" })
  starttime: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
