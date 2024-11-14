import { Column, Entity } from 'typeorm';

@Entity('mobile_wsq_threadlist')
export class PreMobileWsqThreadlist {
  @Column('int', { primary: true, name: 'skey', unsigned: true })
  skey: number;

  @Column('mediumtext', { name: 'svalue' })
  svalue: string;
}
