import { Column, Entity } from 'typeorm';

@Entity('pre_ucenter_memberfields')
export class PreUcenterMemberfields {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('mediumtext', { name: 'blacklist' })
  blacklist: string;
}
