import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('item', ['tagid', 'itemid', 'idtype'], { unique: true })
@Index('tagid', ['tagid', 'idtype'], {})
@Index('idtype', ['idtype', 'itemid'], {})
@Entity('common_tagitem')
export class PreCommonTagitem {
  @PrimaryColumn('mediumint', { name: 'tagid', unsigned: true, default: () => "'0'" })
  tagid: number;

  @Column('varchar', { name: 'tagname', length: 20 })
  tagname: string;

  @PrimaryColumn('mediumint', { name: 'itemid', unsigned: true, default: () => "'0'" })
  itemid: number;

  @PrimaryColumn('char', { name: 'idtype', length: 10 })
  idtype: string;
}
