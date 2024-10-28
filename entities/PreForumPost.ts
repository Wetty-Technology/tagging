import { Column, Entity, Index } from 'typeorm';

@Index('pid', ['pid'], { unique: true })
@Index('fid', ['fid'], {})
@Index('dateline', ['dateline'], {})
@Index('invisible', ['invisible'], {})
@Index('displayorder', ['tid', 'invisible', 'dateline'], {})
@Index('first', ['tid', 'first'], {})
@Index('authorid', ['authorid', 'invisible'], {})
@Index('quan', ['tid', 'first', 'invisible', 'status', 'quanstatus'], {})
@Entity('pre_forum_post')
export class PreForumPost {
  @Column('int', { name: 'pid', unique: true, unsigned: true })
  pid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('int', { name: 'repid', unsigned: true, default: () => "'0'" })
  repid: number;

  @Column('tinyint', { name: 'first', width: 1, default: () => "'0'" })
  first: boolean;

  @Column('varchar', { name: 'author', length: 15 })
  author: string;

  @Column('mediumint', {
    name: 'authorid',
    unsigned: true,
    default: () => "'0'",
  })
  authorid: number;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('mediumint', {
    name: 'updateuid',
    unsigned: true,
    default: () => "'0'",
  })
  updateuid: number;

  @Column('mediumtext', { name: 'premsg' })
  premsg: string;

  @Column('longtext', { name: 'message' })
  message: string;

  @Column('varchar', { name: 'useip', length: 45 })
  useip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('tinyint', { name: 'invisible', width: 1, default: () => "'0'" })
  invisible: boolean;

  @Column('tinyint', { name: 'anonymous', width: 1, default: () => "'0'" })
  anonymous: boolean;

  @Column('tinyint', { name: 'usesig', width: 1, default: () => "'0'" })
  usesig: boolean;

  @Column('tinyint', { name: 'htmlon', width: 1, default: () => "'0'" })
  htmlon: boolean;

  @Column('tinyint', { name: 'bbcodeoff', width: 1, default: () => "'0'" })
  bbcodeoff: boolean;

  @Column('tinyint', { name: 'smileyoff', width: 1, default: () => "'0'" })
  smileyoff: boolean;

  @Column('tinyint', { name: 'parseurloff', width: 1, default: () => "'0'" })
  parseurloff: boolean;

  @Column('tinyint', { name: 'attachment', width: 1, default: () => "'0'" })
  attachment: boolean;

  @Column('smallint', { name: 'rate', default: () => "'0'" })
  rate: number;

  @Column('tinyint', {
    name: 'ratetimes',
    unsigned: true,
    default: () => "'0'",
  })
  ratetimes: number;

  @Column('int', { name: 'status', default: () => "'0'" })
  status: number;

  @Column('varchar', { name: 'tags', length: 255, default: () => "'0'" })
  tags: string;

  @Column('tinyint', { name: 'comment', width: 1, default: () => "'0'" })
  comment: boolean;

  @Column('int', { name: 'replycredit', default: () => "'0'" })
  replycredit: number;

  @Column('int', { primary: true, name: 'position', unsigned: true })
  position: number;

  @Column('mediumtext', { name: 'reply', nullable: true })
  reply: string | null;

  @Column('int', { name: 'quanstatus', default: () => "'1'" })
  quanstatus: number;
}
