import { Column, Entity } from 'typeorm';

@Entity('ucenter_mergemembers')
export class PreUcenterMergemembers {
  @Column('smallint', { primary: true, name: 'appid', unsigned: true })
  appid: number;

  @Column('char', { primary: true, name: 'username', length: 15 })
  username: string;
}
