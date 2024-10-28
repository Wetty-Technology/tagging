import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('srchmod', ['srchmod'], {})
@Entity('pre_common_searchindex')
export class PreCommonSearchindex {
  @PrimaryGeneratedColumn({ type: 'int', name: 'searchid', unsigned: true })
  searchid: number;

  @Column('tinyint', { name: 'srchmod', unsigned: true })
  srchmod: number;

  @Column('varchar', { name: 'keywords', length: 255 })
  keywords: string;

  @Column('mediumtext', { name: 'searchstring' })
  searchstring: string;

  @Column('varchar', { name: 'useip', length: 45 })
  useip: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('smallint', {
    name: 'threadsortid',
    unsigned: true,
    default: () => "'0'",
  })
  threadsortid: number;

  @Column('smallint', { name: 'num', unsigned: true, default: () => "'0'" })
  num: number;

  @Column('mediumtext', { name: 'ids' })
  ids: string;
}
