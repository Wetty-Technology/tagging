import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('digest', ['digest'], {})
@Index('sortid', ['sortid'], {})
@Index('displayorder', ['fid', 'displayorder', 'lastpost'], {})
@Index('typeid', ['fid', 'typeid', 'displayorder', 'lastpost'], {})
@Index('recommends', ['recommends'], {})
@Index('heats', ['heats'], {})
@Index('authorid', ['authorid'], {})
@Index('special', ['special'], {})
@Index('isgroup', ['isgroup', 'lastpost'], {})
@Entity('forum_thread')
export class PreForumThread {
  @PrimaryGeneratedColumn({ type: 'int', name: 'tid', unsigned: true })
  tid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('smallint', {
    name: 'posttableid',
    unsigned: true,
    default: () => "'0'",
  })
  posttableid: number;

  @Column('smallint', { name: 'typeid', unsigned: true, default: () => "'0'" })
  typeid: number;

  @Column('smallint', { name: 'sortid', unsigned: true, default: () => "'0'" })
  sortid: number;

  @Column('tinyint', { name: 'readperm', unsigned: true, default: () => "'0'" })
  readperm: number;

  @Column('smallint', { name: 'price', default: () => "'0'" })
  price: number;

  @Column('char', { name: 'author', length: 15 })
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

  @Column('int', { name: 'lastpost', unsigned: true, default: () => "'0'" })
  lastpost: number;

  @Column('char', { name: 'lastposter', length: 15 })
  lastposter: string;

  @Column('int', { name: 'views', unsigned: true, default: () => "'0'" })
  views: number;

  @Column('mediumint', {
    name: 'replies',
    unsigned: true,
    default: () => "'0'",
  })
  replies: number;

  @Column('tinyint', { name: 'displayorder', width: 1, default: () => "'0'" })
  displayorder: number;

  @Column('tinyint', { name: 'highlight', width: 1, default: () => "'0'" })
  highlight: boolean;

  @Column('tinyint', { name: 'digest', width: 1, default: () => "'0'" })
  digest: number;

  @Column('tinyint', { name: 'rate', width: 1, default: () => "'0'" })
  rate: boolean;

  @Column('tinyint', { name: 'special', width: 1, default: () => "'0'" })
  special: boolean;

  @Column('tinyint', { name: 'attachment', width: 1, default: () => "'0'" })
  attachment: boolean;

  @Column('tinyint', { name: 'moderated', width: 1, default: () => "'0'" })
  moderated: boolean;

  @Column('mediumint', { name: 'closed', unsigned: true, default: () => "'0'" })
  closed: number;

  @Column('tinyint', { name: 'stickreply', width: 1, default: () => "'0'" })
  stickreply: boolean;

  @Column('smallint', { name: 'recommends', default: () => "'0'" })
  recommends: number;

  @Column('smallint', { name: 'recommend_add', default: () => "'0'" })
  recommendAdd: number;

  @Column('smallint', { name: 'recommend_sub', default: () => "'0'" })
  recommendSub: number;

  @Column('int', { name: 'heats', unsigned: true, default: () => "'0'" })
  heats: number;

  @Column('smallint', { name: 'status', unsigned: true, default: () => "'0'" })
  status: number;

  @Column('tinyint', { name: 'isgroup', width: 1, default: () => "'0'" })
  isgroup: boolean;

  @Column('mediumint', { name: 'favtimes', default: () => "'0'" })
  favtimes: number;

  @Column('mediumint', { name: 'sharetimes', default: () => "'0'" })
  sharetimes: number;

  @Column('tinyint', { name: 'stamp', default: () => "'-1'" })
  stamp: number;

  @Column('tinyint', { name: 'icon', default: () => "'-1'" })
  icon: number;

  @Column('mediumint', { name: 'pushedaid', default: () => "'0'" })
  pushedaid: number;

  @Column('smallint', { name: 'cover', default: () => "'0'" })
  cover: number;

  @Column('int', { name: 'replycredit', default: () => "'0'" })
  replycredit: number;

  @Column('char', { name: 'relatebytag', length: 255, default: () => "'0'" })
  relatebytag: string;

  @Column('int', { name: 'maxposition', unsigned: true, default: () => "'0'" })
  maxposition: number;

  @Column('char', { name: 'bgcolor', length: 8 })
  bgcolor: string;

  @Column('int', { name: 'comments', unsigned: true, default: () => "'0'" })
  comments: number;

  @Column('smallint', { name: 'hidden', unsigned: true, default: () => "'0'" })
  hidden: number;
}
