import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tid', ['tid'], {})
@Index('uid', ['uid'], {})
@Index('dateline', ['downloads'], {})
@Index('pid', ['pid'], {})
@Entity('pre_forum_attachment')
export class PreForumAttachment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'aid', unsigned: true })
  aid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', { name: 'pid', unsigned: true, default: () => "'0'" })
  pid: number;

  @Column('mediumint', { name: 'downloads', default: () => "'0'" })
  downloads: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('tinyint', { name: 'tableid', unsigned: true, default: () => "'0'" })
  tableid: number;
}
