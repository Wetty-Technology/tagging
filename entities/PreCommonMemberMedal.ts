import { Column, Entity } from 'typeorm';

@Entity('pre_common_member_medal')
export class PreCommonMemberMedal {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('smallint', { primary: true, name: 'medalid', unsigned: true })
  medalid: number;
}
