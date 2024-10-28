import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('type', ['type', 'displayorder'], {})
@Entity('pre_common_smiley')
export class PreCommonSmiley {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('smallint', { name: 'typeid', unsigned: true })
  typeid: number;

  @Column('tinyint', { name: 'displayorder', width: 1, default: () => "'0'" })
  displayorder: boolean;

  @Column('enum', {
    name: 'type',
    enum: ['smiley', 'stamp', 'stamplist'],
    default: () => "'smiley'",
  })
  type: 'smiley' | 'stamp' | 'stamplist';

  @Column('varchar', { name: 'code', length: 30 })
  code: string;

  @Column('varchar', { name: 'url', length: 30 })
  url: string;
}
