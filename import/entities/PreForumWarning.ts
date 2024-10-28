import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pid', ['pid'], { unique: true })
@Index('authorid', ['authorid'], {})
@Entity('pre_forum_warning')
export class PreForumWarning {
  @PrimaryGeneratedColumn({ type: 'int', name: 'wid', unsigned: true })
  wid: number;

  @Column('int', { name: 'pid', unique: true, unsigned: true })
  pid: number;

  @Column('mediumint', { name: 'operatorid', unsigned: true })
  operatorid: number;

  @Column('char', { name: 'operator', length: 15 })
  operator: string;

  @Column('mediumint', { name: 'authorid', unsigned: true })
  authorid: number;

  @Column('char', { name: 'author', length: 15 })
  author: string;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('char', { name: 'reason', length: 40 })
  reason: string;
}
