import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Index('appid', ['appid'], {})
@Entity('pre_home_appcreditlog')
export class PreHomeAppcreditlog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'logid', unsigned: true })
  logid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('varchar', { name: 'appname', length: 60 })
  appname: string;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('mediumint', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;

  @Column('mediumtext', { name: 'note' })
  note: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
