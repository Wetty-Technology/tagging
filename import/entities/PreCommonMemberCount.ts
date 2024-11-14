import { Column, Entity, Index } from 'typeorm';

@Index('posts', ['posts'], {})
@Entity('common_member_count')
export class PreCommonMemberCount {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('int', { name: 'extcredits1', default: () => "'0'" })
  extcredits1: number;

  @Column('int', { name: 'extcredits2', default: () => "'0'" })
  extcredits2: number;

  @Column('int', { name: 'extcredits3', default: () => "'0'" })
  extcredits3: number;

  @Column('int', { name: 'extcredits4', default: () => "'0'" })
  extcredits4: number;

  @Column('int', { name: 'extcredits5', default: () => "'0'" })
  extcredits5: number;

  @Column('int', { name: 'extcredits6', default: () => "'0'" })
  extcredits6: number;

  @Column('int', { name: 'extcredits7', default: () => "'0'" })
  extcredits7: number;

  @Column('int', { name: 'extcredits8', default: () => "'0'" })
  extcredits8: number;

  @Column('smallint', { name: 'friends', unsigned: true, default: () => "'0'" })
  friends: number;

  @Column('mediumint', { name: 'posts', unsigned: true, default: () => "'0'" })
  posts: number;

  @Column('mediumint', {
    name: 'threads',
    unsigned: true,
    default: () => "'0'",
  })
  threads: number;

  @Column('smallint', {
    name: 'digestposts',
    unsigned: true,
    default: () => "'0'",
  })
  digestposts: number;

  @Column('smallint', { name: 'doings', unsigned: true, default: () => "'0'" })
  doings: number;

  @Column('smallint', { name: 'blogs', unsigned: true, default: () => "'0'" })
  blogs: number;

  @Column('smallint', { name: 'albums', unsigned: true, default: () => "'0'" })
  albums: number;

  @Column('smallint', {
    name: 'sharings',
    unsigned: true,
    default: () => "'0'",
  })
  sharings: number;

  @Column('int', { name: 'attachsize', unsigned: true, default: () => "'0'" })
  attachsize: number;

  @Column('mediumint', { name: 'views', unsigned: true, default: () => "'0'" })
  views: number;

  @Column('smallint', { name: 'oltime', unsigned: true, default: () => "'0'" })
  oltime: number;

  @Column('smallint', {
    name: 'todayattachs',
    unsigned: true,
    default: () => "'0'",
  })
  todayattachs: number;

  @Column('int', {
    name: 'todayattachsize',
    unsigned: true,
    default: () => "'0'",
  })
  todayattachsize: number;

  @Column('mediumint', { name: 'feeds', unsigned: true, default: () => "'0'" })
  feeds: number;

  @Column('mediumint', {
    name: 'follower',
    unsigned: true,
    default: () => "'0'",
  })
  follower: number;

  @Column('mediumint', {
    name: 'following',
    unsigned: true,
    default: () => "'0'",
  })
  following: number;

  @Column('mediumint', {
    name: 'newfollower',
    unsigned: true,
    default: () => "'0'",
  })
  newfollower: number;

  @Column('mediumint', {
    name: 'blacklist',
    unsigned: true,
    default: () => "'0'",
  })
  blacklist: number;
}
