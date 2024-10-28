import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('urlkey', ['urlkey'], {})
@Index('fid', ['fid'], {})
@Entity('pre_common_report')
export class PreCommonReport {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('char', { name: 'urlkey', length: 32 })
  urlkey: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('smallint', { name: 'num', unsigned: true, default: () => "'1'" })
  num: number;

  @Column('mediumint', { name: 'opuid', unsigned: true, default: () => "'0'" })
  opuid: number;

  @Column('varchar', { name: 'opname', length: 15 })
  opname: string;

  @Column('int', { name: 'optime', unsigned: true, default: () => "'0'" })
  optime: number;

  @Column('varchar', { name: 'opresult', length: 255 })
  opresult: string;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;
}
