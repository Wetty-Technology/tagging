import { Column, Entity } from 'typeorm';

@Entity('home_picfield')
export class PreHomePicfield {
  @Column('mediumint', {
    primary: true,
    name: 'picid',
    unsigned: true,
    default: () => "'0'",
  })
  picid: number;

  @Column('mediumtext', { name: 'hotuser' })
  hotuser: string;
}
