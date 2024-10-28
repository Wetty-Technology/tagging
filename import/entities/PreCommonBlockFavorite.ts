import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('pre_common_block_favorite')
export class PreCommonBlockFavorite {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'favid', unsigned: true })
  favid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'bid', unsigned: true, default: () => "'0'" })
  bid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
