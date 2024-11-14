import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('gpmid', ['gpmid'], {})
@Entity('common_member_grouppm')
export class PreCommonMemberGrouppm {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: 'smallint', name: 'gpmid', unsigned: true })
  gpmid: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
