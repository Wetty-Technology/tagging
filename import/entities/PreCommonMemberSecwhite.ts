import { Column, Entity } from 'typeorm';

@Entity('common_member_secwhite')
export class PreCommonMemberSecwhite {
  @Column('int', { primary: true, name: 'uid' })
  uid: number;

  @Column('int', { name: 'dateline' })
  dateline: number;
}
