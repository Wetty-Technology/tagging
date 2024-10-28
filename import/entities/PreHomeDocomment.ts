import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('doid', ['doid', 'dateline'], {})
@Index('dateline', ['dateline'], {})
@Entity('pre_home_docomment')
export class PreHomeDocomment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'upid', unsigned: true, default: () => "'0'" })
  upid: number;

  @Column('mediumint', { name: 'doid', unsigned: true, default: () => "'0'" })
  doid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('smallint', { name: 'grade', unsigned: true, default: () => "'0'" })
  grade: number;
}
