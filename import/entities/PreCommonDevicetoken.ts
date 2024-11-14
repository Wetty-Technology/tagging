import { Column, Entity, Index } from 'typeorm';

@Index('token', ['token'], {})
@Entity('common_devicetoken')
export class PreCommonDevicetoken {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'token', length: 50 })
  token: string;
}
