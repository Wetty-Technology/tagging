import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Index('uid', ['uid', 'fieldid'], {})
@Entity('common_member_security')
export class PreCommonMemberSecurity {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'securityid',
    unsigned: true,
  })
  securityid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('varchar', { name: 'fieldid', length: 255 })
  fieldid: string;

  @Column('mediumtext', { name: 'oldvalue' })
  oldvalue: string;

  @Column('mediumtext', { name: 'newvalue' })
  newvalue: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
