import { Column, Entity } from 'typeorm';

@Entity('pre_common_syscache')
export class PreCommonSyscache {
  @Column('varchar', { primary: true, name: 'cname', length: 32 })
  cname: string;

  @Column('tinyint', { name: 'ctype', unsigned: true })
  ctype: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('mediumblob', { name: 'data' })
  data: Buffer;
}
