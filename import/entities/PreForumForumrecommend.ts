import { Column, Entity, Index } from 'typeorm';

@Index('displayorder', ['fid', 'displayorder'], {})
@Index('position', ['position'], {})
@Entity('pre_forum_forumrecommend')
export class PreForumForumrecommend {
  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', { primary: true, name: 'tid', unsigned: true })
  tid: number;

  @Column('smallint', { name: 'typeid' })
  typeid: number;

  @Column('tinyint', { name: 'displayorder', width: 1 })
  displayorder: boolean;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('char', { name: 'author', length: 15 })
  author: string;

  @Column('mediumint', { name: 'authorid' })
  authorid: number;

  @Column('mediumint', { name: 'moderatorid' })
  moderatorid: number;

  @Column('int', { name: 'expiration', unsigned: true })
  expiration: number;

  @Column('tinyint', { name: 'position', width: 1, default: () => "'0'" })
  position: boolean;

  @Column('tinyint', { name: 'highlight', width: 1, default: () => "'0'" })
  highlight: boolean;

  @Column('int', { name: 'aid', unsigned: true, default: () => "'0'" })
  aid: number;

  @Column('char', { name: 'filename', length: 100 })
  filename: string;
}
