import { Column, Entity } from 'typeorm';

@Entity('pre_mobileoem_member')
export class PreMobileoemMember {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    name: 'newpush',
    unsigned: true,
    default: () => "'0'",
  })
  newpush: number;
}
