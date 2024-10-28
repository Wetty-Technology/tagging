import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('pre_forum_attachment_unused')
export class PreForumAttachmentUnused {
  @Column('int', { primary: true, name: 'aid', unsigned: true })
  aid: number;

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

  @Column('tinyint', { name: 'isimage', width: 1, default: () => "'0'" })
  isimage: boolean;

  @Column('mediumint', { name: 'width', unsigned: true, default: () => "'0'" })
  width: number;

  @Column('mediumint', { name: 'height', unsigned: true, default: () => "'0'" })
  height: number;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;
}
