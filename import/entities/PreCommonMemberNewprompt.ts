import { Column, Entity } from 'typeorm';

@Entity('common_member_newprompt')
export class PreCommonMemberNewprompt {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('varchar', { name: 'data', length: 255 })
  data: string;
}
