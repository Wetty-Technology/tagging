import { Column, Entity } from 'typeorm';

@Entity('ucenter_settings')
export class PreUcenterSettings {
  @Column('varchar', { primary: true, name: 'k', length: 32 })
  k: string;

  @Column('mediumtext', { name: 'v' })
  v: string;
}
