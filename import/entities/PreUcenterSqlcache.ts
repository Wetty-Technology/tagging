import { Column, Entity, Index } from 'typeorm';

@Index('expiry', ['expiry'], {})
@Entity('ucenter_sqlcache')
export class PreUcenterSqlcache {
  @Column('char', { primary: true, name: 'sqlid', length: 6 })
  sqlid: string;

  @Column('char', { name: 'data', length: 100 })
  data: string;

  @Column('int', { name: 'expiry', unsigned: true })
  expiry: number;
}
