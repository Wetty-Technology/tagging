import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('common_statuser')
export class PreCommonStatuser {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'daytime', unsigned: true, default: () => "'0'" })
  daytime: number;

  @Column('char', { name: 'type', length: 20 })
  type: string;
}
