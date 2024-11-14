import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('appid', ['appid'], {})
@Index('level', ['level', 'failures'], {})
@Entity('ucenter_mailqueue')
export class PreUcenterMailqueue {
  @PrimaryGeneratedColumn({ type: 'int', name: 'mailid', unsigned: true })
  mailid: number;

  @Column('mediumint', { name: 'touid', unsigned: true, default: () => "'0'" })
  touid: number;

  @Column('varchar', { name: 'tomail', length: 32 })
  tomail: string;

  @Column('varchar', { name: 'frommail', length: 100 })
  frommail: string;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('varchar', { name: 'charset', length: 15 })
  charset: string;

  @Column('tinyint', { name: 'htmlon', width: 1, default: () => "'0'" })
  htmlon: boolean;

  @Column('tinyint', { name: 'level', width: 1, default: () => "'1'" })
  level: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'failures', unsigned: true, default: () => "'0'" })
  failures: number;

  @Column('smallint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;
}
