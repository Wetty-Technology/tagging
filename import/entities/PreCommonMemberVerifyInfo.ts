import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('verifytype', ['verifytype', 'flag'], {})
@Index('uid', ['uid', 'verifytype', 'dateline'], {})
@Entity('pre_common_member_verify_info')
export class PreCommonMemberVerifyInfo {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'vid', unsigned: true })
  vid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 30 })
  username: string;

  @Column('tinyint', { name: 'verifytype', width: 1, default: () => "'0'" })
  verifytype: boolean;

  @Column('tinyint', { name: 'flag', width: 1, default: () => "'0'" })
  flag: boolean;

  @Column('mediumtext', { name: 'field' })
  field: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
