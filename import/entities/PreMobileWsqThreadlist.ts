import { Column, Entity } from 'typeorm';

@Entity('pre_mobile_wsq_threadlist')
export class PreMobileWsqThreadlist {
  @Column('int', { primary: true, name: 'skey', unsigned: true })
  skey: number;

  @Column('mediumtext', { name: 'svalue' })
  svalue: string;
}
