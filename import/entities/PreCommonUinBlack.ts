import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], { unique: true })
@Entity('common_uin_black')
export class PreCommonUinBlack {
  @Column('char', { primary: true, name: 'uin', length: 40 })
  uin: string;

  @Column('mediumint', {
    name: 'uid',
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
