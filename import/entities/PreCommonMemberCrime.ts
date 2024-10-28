import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'action', 'dateline'], {})
@Entity('pre_common_member_crime')
export class PreCommonMemberCrime {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', {
    name: 'operatorid',
    unsigned: true,
    default: () => "'0'",
  })
  operatorid: number;

  @Column('varchar', { name: 'operator', length: 15 })
  operator: string;

  @Column('tinyint', { name: 'action' })
  action: number;

  @Column('mediumtext', { name: 'reason' })
  reason: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
