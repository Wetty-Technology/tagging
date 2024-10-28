import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('aid', ['aid', 'attachid'], {})
@Index('attachment', ['attachment'], {})
@Entity('pre_portal_attachment')
export class PrePortalAttachment {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'attachid',
    unsigned: true,
  })
  attachid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'filename', length: 255 })
  filename: string;

  @Column('varchar', { name: 'filetype', length: 255 })
  filetype: string;

  @Column('int', { name: 'filesize', unsigned: true, default: () => "'0'" })
  filesize: number;

  @Column('varchar', { name: 'attachment', length: 255 })
  attachment: string;

  @Column('tinyint', { name: 'isimage', width: 1, default: () => "'0'" })
  isimage: boolean;

  @Column('tinyint', { name: 'thumb', width: 1, default: () => "'0'" })
  thumb: boolean;

  @Column('tinyint', { name: 'remote', width: 1, default: () => "'0'" })
  remote: boolean;

  @Column('mediumint', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;
}
