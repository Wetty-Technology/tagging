import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tid', ['tid'], { unique: true })
@Entity('pre_connect_tlog')
export class PreConnectTlog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'tlid', unsigned: true })
  tlid: number;

  @Column('mediumint', {
    name: 'tid',
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', {
    name: 'publishtimes',
    unsigned: true,
    default: () => "'0'",
  })
  publishtimes: number;

  @Column('int', {
    name: 'lastpublished',
    unsigned: true,
    default: () => "'0'",
  })
  lastpublished: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'1'" })
  status: boolean;
}
