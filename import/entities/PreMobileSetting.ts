import { Column, Entity } from 'typeorm';

@Entity('mobile_setting')
export class PreMobileSetting {
  @Column('varchar', { primary: true, name: 'skey', length: 190 })
  skey: string;

  @Column('mediumtext', { name: 'svalue' })
  svalue: string;
}
