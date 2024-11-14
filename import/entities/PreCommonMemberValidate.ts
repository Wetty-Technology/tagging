import { Column, Entity, Index } from 'typeorm';

@Index('status', ['status'], {})
@Entity('common_member_validate')
export class PreCommonMemberValidate {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('int', { name: 'submitdate', unsigned: true, default: () => "'0'" })
  submitdate: number;

  @Column('int', { name: 'moddate', unsigned: true, default: () => "'0'" })
  moddate: number;

  @Column('varchar', { name: 'admin', length: 15 })
  admin: string;

  @Column('tinyint', {
    name: 'submittimes',
    unsigned: true,
    default: () => "'0'",
  })
  submittimes: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('mediumtext', { name: 'remark' })
  remark: string;
}
