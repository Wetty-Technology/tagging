import { Column, Entity } from 'typeorm';

@Entity('pre_ucenter_settings')
export class PreUcenterSettings {
  @Column('varchar', { primary: true, name: 'k', length: 32 })
  k: string;

  @Column('mediumtext', { name: 'v' })
  v: string;
}
