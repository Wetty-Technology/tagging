import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_ucenter_applications')
export class PreUcenterApplications {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'appid', unsigned: true })
  appid: number;

  @Column('varchar', { name: 'type', length: 16 })
  type: string;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('varchar', { name: 'authkey', length: 255 })
  authkey: string;

  @Column('varchar', { name: 'ip', length: 15 })
  ip: string;

  @Column('varchar', {
    name: 'apifilename',
    length: 30,
    default: () => "'uc.php'",
  })
  apifilename: string;

  @Column('varchar', { name: 'viewprourl', length: 255 })
  viewprourl: string;

  @Column('varchar', { name: 'charset', length: 8 })
  charset: string;

  @Column('varchar', { name: 'dbcharset', length: 8 })
  dbcharset: string;

  @Column('tinyint', { name: 'synlogin', width: 1, default: () => "'0'" })
  synlogin: boolean;

  @Column('tinyint', {
    name: 'recvnote',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  recvnote: boolean | null;

  @Column('mediumtext', { name: 'extra' })
  extra: string;

  @Column('mediumtext', { name: 'tagtemplates' })
  tagtemplates: string;

  @Column('mediumtext', { name: 'allowips' })
  allowips: string;
}
