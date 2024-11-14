import { Column, Entity, Index } from 'typeorm';

@Index('id', ['id', 'idtype', 'dateline'], {})
@Index('uid', ['uid', 'idtype', 'dateline'], {})
@Entity('home_clickuser')
export class PreHomeClickuser {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('mediumint', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 15 })
  idtype: string;

  @Column('smallint', { name: 'clickid', unsigned: true, default: () => "'0'" })
  clickid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
