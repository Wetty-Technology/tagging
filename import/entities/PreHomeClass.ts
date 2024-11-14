import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('home_class')
export class PreHomeClass {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'classid',
    unsigned: true,
  })
  classid: number;

  @Column('char', { name: 'classname', length: 40 })
  classname: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
