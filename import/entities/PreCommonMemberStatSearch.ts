import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('hash', ['hash'], {})
@Entity('pre_common_member_stat_search')
export class PreCommonMemberStatSearch {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'optionid',
    unsigned: true,
  })
  optionid: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('mediumtext', { name: 'condition' })
  condition: string;

  @Column('varchar', { name: 'hash', length: 255 })
  hash: string;

  @Column('mediumint', { name: 'users', unsigned: true, default: () => "'0'" })
  users: number;

  @Column('int', { name: 'updatetime', unsigned: true, default: () => "'0'" })
  updatetime: number;
}
