import { Column, Entity } from 'typeorm';

@Entity('pre_ucenter_vars')
export class PreUcenterVars {
  @Column('char', { primary: true, name: 'name', length: 32 })
  name: string;

  @Column('char', { name: 'value', length: 255 })
  value: string;
}
