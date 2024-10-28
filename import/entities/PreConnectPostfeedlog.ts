import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pid', ['pid'], { unique: true })
@Entity('pre_connect_postfeedlog')
export class PreConnectPostfeedlog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'flid', unsigned: true })
  flid: number;

  @Column('int', {
    name: 'pid',
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

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
