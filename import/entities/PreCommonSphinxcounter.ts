import { Column, Entity } from 'typeorm';

@Entity('pre_common_sphinxcounter')
export class PreCommonSphinxcounter {
  @Column('tinyint', { primary: true, name: 'indexid', width: 1 })
  indexid: boolean;

  @Column('int', { name: 'maxid' })
  maxid: number;
}
