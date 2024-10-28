import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('aid', ['aid', 'cid'], {})
@Index('idtype', ['id', 'idtype', 'dateline'], {})
@Entity('pre_portal_comment')
export class PrePortalComment {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('mediumint', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;

  @Column('varchar', { name: 'postip', length: 255 })
  postip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('mediumint', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 20 })
  idtype: string;
}
