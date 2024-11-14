import { Column, Entity, Index } from 'typeorm';

@Index('nexttime', ['tid', 'nexttime'], {})
@Index('updatetime', ['tid', 'updatetime'], {})
@Entity('connect_tthreadlog')
export class PreConnectTthreadlog {
  @Column('char', { primary: true, name: 'twid', length: 16 })
  twid: string;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('char', { name: 'conopenid', length: 32 })
  conopenid: string;

  @Column('int', {
    name: 'pagetime',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  pagetime: number | null;

  @Column('char', { name: 'lasttwid', nullable: true, length: 16 })
  lasttwid: string | null;

  @Column('int', {
    name: 'nexttime',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  nexttime: number | null;

  @Column('int', {
    name: 'updatetime',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  updatetime: number | null;

  @Column('int', {
    name: 'dateline',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateline: number | null;
}
