import { Column, Entity } from 'typeorm';

@Entity('pre_common_setting')
export class PreCommonSetting {
  @Column('varchar', { primary: true, name: 'skey', length: 190 })
  skey: string;

  @Column('mediumtext', { name: 'svalue' })
  svalue: string;
}
