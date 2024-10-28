import { Column, Entity, Index } from 'typeorm';

@Index('bid', ['bid'], {})
@Entity('pre_common_template_block')
export class PreCommonTemplateBlock {
  @Column('varchar', { primary: true, name: 'targettplname', length: 100 })
  targettplname: string;

  @Column('varchar', { primary: true, name: 'tpldirectory', length: 80 })
  tpldirectory: string;

  @Column('mediumint', {
    primary: true,
    name: 'bid',
    unsigned: true,
    default: () => "'0'",
  })
  bid: number;
}
