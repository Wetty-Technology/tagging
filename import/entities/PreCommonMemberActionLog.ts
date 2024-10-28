import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('dateline', ['dateline', 'action', 'uid'], {})
@Entity('pre_common_member_action_log')
export class PreCommonMemberActionLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('tinyint', { name: 'action', default: () => "'0'" })
  action: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
