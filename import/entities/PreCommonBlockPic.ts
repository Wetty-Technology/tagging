import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('bid', ['bid', 'itemid'], {})
@Entity('common_block_pic')
export class PreCommonBlockPic {
  @PrimaryGeneratedColumn({ type: 'int', name: 'picid', unsigned: true })
  picid: number;

  @Column('mediumint', { name: 'bid', unsigned: true, default: () => "'0'" })
  bid: number;

  @Column('int', { name: 'itemid', unsigned: true, default: () => "'0'" })
  itemid: number;

  @Column('varchar', { name: 'pic', length: 255 })
  pic: string;

  @Column('tinyint', { name: 'picflag', width: 1, default: () => "'0'" })
  picflag: boolean;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;
}
