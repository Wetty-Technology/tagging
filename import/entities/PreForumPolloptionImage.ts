import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('poid', ['poid'], {})
@Index('tid', ['tid'], {})
@Index('uid', ['uid'], {})
@Entity('forum_polloption_image')
export class PreForumPolloptionImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'aid', unsigned: true })
  aid: number;

  @Column('int', { name: 'poid', unsigned: true, default: () => "'0'" })
  poid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', { name: 'pid', unsigned: true, default: () => "'0'" })
  pid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'filename', length: 255 })
  filename: string;

  @Column('int', { name: 'filesize', unsigned: true, default: () => "'0'" })
  filesize: number;

  @Column('varchar', { name: 'attachment', length: 255 })
  attachment: string;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;

  @Column('mediumint', { name: 'width', unsigned: true, default: () => "'0'" })
  width: number;

  @Column('mediumint', { name: 'height', unsigned: true, default: () => "'0'" })
  height: number;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
