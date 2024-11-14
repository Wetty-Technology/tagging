import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('authorid', ['authorid', 'idtype'], {})
@Index('id', ['id', 'idtype', 'dateline'], {})
@Entity('home_comment')
export class PreHomeComment {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 20 })
  idtype: string;

  @Column('mediumint', {
    name: 'authorid',
    unsigned: true,
    default: () => "'0'",
  })
  authorid: number;

  @Column('varchar', { name: 'author', length: 15 })
  author: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('tinyint', { name: 'magicflicker', width: 1, default: () => "'0'" })
  magicflicker: boolean;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;
}
