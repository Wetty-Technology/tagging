import { Column, Entity } from 'typeorm';

@Entity('pre_ucenter_newpm')
export class PreUcenterNewpm {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;
}
