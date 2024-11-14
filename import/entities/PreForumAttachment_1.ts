import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid'], {})
@Index('pid', ['pid'], {})
@Index('uid', ['uid'], {})
@Index('attachment', ['attachment'], {})
@Entity('forum_attachment_1')
export class PreForumAttachment_1 {
  @Column('int', { primary: true, name: 'aid', unsigned: true })
  aid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', { name: 'pid', unsigned: true, default: () => "'0'" })
  pid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'filename', length: 255 })
  filename: string;

  @Column('int', { name: 'filesize', unsigned: true, default: () => "'0'" })
  filesize: number;

  @Column('varchar', { name: 'attachment', length: 255 })
  attachment: string;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('tinyint', { name: 'readperm', unsigned: true, default: () => "'0'" })
  readperm: number;

  @Column('smallint', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;

  @Column('tinyint', { name: 'isimage', width: 1, default: () => "'0'" })
  isimage: boolean;

  @Column('mediumint', { name: 'width', unsigned: true, default: () => "'0'" })
  width: number;

  @Column('mediumint', { name: 'height', unsigned: true, default: () => "'0'" })
  height: number;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;

  @Column('mediumint', { name: 'picid', default: () => "'0'" })
  picid: number;
}
