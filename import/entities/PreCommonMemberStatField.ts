import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fieldid', ['fieldid'], {})
@Entity('common_member_stat_field')
export class PreCommonMemberStatField {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'optionid',
    unsigned: true,
  })
  optionid: number;

  @Column('varchar', { name: 'fieldid', length: 255 })
  fieldid: string;

  @Column('varchar', { name: 'fieldvalue', length: 255 })
  fieldvalue: string;

  @Column('varchar', { name: 'hash', length: 255 })
  hash: string;

  @Column('mediumint', { name: 'users', unsigned: true, default: () => "'0'" })
  users: number;

  @Column('int', { name: 'updatetime', unsigned: true, default: () => "'0'" })
  updatetime: number;
}
