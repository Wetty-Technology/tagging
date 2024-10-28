import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('action', ['action'], { unique: true })
@Entity('pre_common_credit_rule')
export class PreCommonCreditRule {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'rid', unsigned: true })
  rid: number;

  @Column('varchar', { name: 'rulename', length: 20 })
  rulename: string;

  @Column('varchar', { name: 'action', unique: true, length: 20 })
  action: string;

  @Column('tinyint', { name: 'cycletype', width: 1, default: () => "'0'" })
  cycletype: boolean;

  @Column('int', { name: 'cycletime', default: () => "'0'" })
  cycletime: number;

  @Column('tinyint', { name: 'rewardnum', default: () => "'1'" })
  rewardnum: number;

  @Column('tinyint', { name: 'norepeat', width: 1, default: () => "'0'" })
  norepeat: boolean;

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

  @Column('mediumtext', { name: 'fids' })
  fids: string;
}
