import { Column, Entity } from 'typeorm';

@Entity('aljsv_userinfo')
export class PreAljsvUserinfo {
  @Column('varchar', { name: 'uid', length: 255 })
  uid: string;

  @Column('int', { name: 'formid' })
  formid: number;

  @Column('varchar', { name: 'user', length: 255 })
  user: string;

  @Column('varchar', { name: 'ipadd', length: 255 })
  ipadd: string;

  @Column('int', { name: 'datetime' })
  datetime: number;

  @Column('varchar', { name: 'formtitle', length: 255 })
  formtitle: string;

  @Column('varchar', { name: 'browser', length: 255 })
  browser: string;

  @Column('varchar', { name: 'mobilepc', length: 255 })
  mobilepc: string;
}
