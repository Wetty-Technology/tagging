import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('closed', ['closed', 'pri', 'noteid'], {})
@Index('dateline', ['dateline'], {})
@Entity('ucenter_notelist')
export class PreUcenterNotelist {
  @PrimaryGeneratedColumn({ type: 'int', name: 'noteid', unsigned: true })
  noteid: number;

  @Column('char', { name: 'operation', length: 32 })
  operation: string;

  @Column('tinyint', { name: 'closed', default: () => "'0'" })
  closed: number;

  @Column('smallint', {
    name: 'totalnum',
    unsigned: true,
    default: () => "'0'",
  })
  totalnum: number;

  @Column('smallint', {
    name: 'succeednum',
    unsigned: true,
    default: () => "'0'",
  })
  succeednum: number;

  @Column('longtext', { name: 'getdata' })
  getdata: string;

  @Column('longtext', { name: 'postdata' })
  postdata: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'pri', default: () => "'0'" })
  pri: number;

  @Column('tinyint', { name: 'app15' })
  app15: number;
}
