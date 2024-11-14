import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_smslog_archive')
export class PreCommonSmslogArchive {
  @PrimaryGeneratedColumn({ type: 'int', name: 'smslogid', unsigned: true })
  smslogid: number;

  @Column('mediumint', { name: 'uid', unsigned: true })
  uid: number;

  @Column('int', { name: 'smstype', default: () => "'0'" })
  smstype: number;

  @Column('int', { name: 'svctype', default: () => "'0'" })
  svctype: number;

  @Column('int', { name: 'smsgw', default: () => "'0'" })
  smsgw: number;

  @Column('int', { name: 'status', default: () => "'0'" })
  status: number;

  @Column('int', { name: 'verify', default: () => "'0'" })
  verify: number;

  @Column('varchar', { name: 'secmobicc', length: 3 })
  secmobicc: string;

  @Column('varchar', { name: 'secmobile', length: 12 })
  secmobile: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('text', { name: 'content' })
  content: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
