import { Column, Entity } from 'typeorm';

@Entity('forum_attachment_exif')
export class PreForumAttachmentExif {
  @Column('int', { primary: true, name: 'aid', unsigned: true })
  aid: number;

  @Column('mediumtext', { name: 'exif' })
  exif: string;
}
