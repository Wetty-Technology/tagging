import { Column, Entity } from 'typeorm';

@Entity('pre_common_diy_data')
export class PreCommonDiyData {
  @Column('varchar', { primary: true, name: 'targettplname', length: 100 })
  targettplname: string;

  @Column('varchar', { primary: true, name: 'tpldirectory', length: 80 })
  tpldirectory: string;

  @Column('varchar', { name: 'primaltplname', length: 255 })
  primaltplname: string;

  @Column('longtext', { name: 'diycontent' })
  diycontent: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
