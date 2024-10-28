import { Column, Entity, Index } from 'typeorm';

@Index('parter', ['taskid', 'dateline'], {})
@Entity('pre_common_mytask')
export class PreCommonMytask {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('smallint', { primary: true, name: 'taskid', unsigned: true })
  taskid: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('char', { name: 'csc', length: 255 })
  csc: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
