import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Index('dateline', ['dateline'], {})
@Entity('home_doing')
export class PreHomeDoing {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'doid', unsigned: true })
  doid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('varchar', { name: 'from', length: 20 })
  from: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('int', { name: 'replynum', unsigned: true, default: () => "'0'" })
  replynum: number;

  @Column('tinyint', { name: 'status', unsigned: true, default: () => "'0'" })
  status: number;
}
