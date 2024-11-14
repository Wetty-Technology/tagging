import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'rid'], { unique: true })
@Entity('research_result')
export class PreResearchResult {
  @Column('int', { name: 'uid', comment: '???ID' })
  uid: number;

  @Column('int', { name: 'rid', comment: '????ID' })
  rid: number;

  @Column('mediumtext', { name: 'detail', comment: '????????????' })
  detail: string;

  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '????ID' })
  id: number;

  @Column('char', { name: 'realname', length: 50 })
  realname: string;

  @Column('char', { name: 'phone', length: 30 })
  phone: string;

  @Column('char', { name: 'email', length: 50 })
  email: string;

  @Column('char', { name: 'add', length: 255 })
  add: string;

  @Column('char', { name: 'qq', length: 50 })
  qq: string;
}
