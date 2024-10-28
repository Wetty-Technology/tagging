import { Column, Entity } from 'typeorm';

@Entity('pre_common_stat')
export class PreCommonStat {
  @Column('int', {
    primary: true,
    name: 'daytime',
    unsigned: true,
    default: () => "'0'",
  })
  daytime: number;

  @Column('int', { name: 'login', unsigned: true, default: () => "'0'" })
  login: number;

  @Column('int', { name: 'register', unsigned: true, default: () => "'0'" })
  register: number;

  @Column('int', { name: 'invite', unsigned: true, default: () => "'0'" })
  invite: number;

  @Column('int', { name: 'appinvite', unsigned: true, default: () => "'0'" })
  appinvite: number;

  @Column('int', { name: 'doing', unsigned: true, default: () => "'0'" })
  doing: number;

  @Column('int', { name: 'blog', unsigned: true, default: () => "'0'" })
  blog: number;

  @Column('int', { name: 'pic', unsigned: true, default: () => "'0'" })
  pic: number;

  @Column('int', { name: 'poll', unsigned: true, default: () => "'0'" })
  poll: number;

  @Column('int', { name: 'activity', unsigned: true, default: () => "'0'" })
  activity: number;

  @Column('int', { name: 'share', unsigned: true, default: () => "'0'" })
  share: number;

  @Column('int', { name: 'thread', unsigned: true, default: () => "'0'" })
  thread: number;

  @Column('int', { name: 'docomment', unsigned: true, default: () => "'0'" })
  docomment: number;

  @Column('int', { name: 'blogcomment', unsigned: true, default: () => "'0'" })
  blogcomment: number;

  @Column('int', { name: 'piccomment', unsigned: true, default: () => "'0'" })
  piccomment: number;

  @Column('int', { name: 'sharecomment', unsigned: true, default: () => "'0'" })
  sharecomment: number;

  @Column('int', { name: 'reward', unsigned: true, default: () => "'0'" })
  reward: number;

  @Column('int', { name: 'debate', unsigned: true, default: () => "'0'" })
  debate: number;

  @Column('int', { name: 'trade', unsigned: true, default: () => "'0'" })
  trade: number;

  @Column('int', { name: 'group', unsigned: true, default: () => "'0'" })
  group: number;

  @Column('int', { name: 'groupjoin', unsigned: true, default: () => "'0'" })
  groupjoin: number;

  @Column('int', { name: 'groupthread', unsigned: true, default: () => "'0'" })
  groupthread: number;

  @Column('int', { name: 'grouppost', unsigned: true, default: () => "'0'" })
  grouppost: number;

  @Column('int', { name: 'post', unsigned: true, default: () => "'0'" })
  post: number;

  @Column('int', { name: 'wall', unsigned: true, default: () => "'0'" })
  wall: number;

  @Column('int', { name: 'poke', unsigned: true, default: () => "'0'" })
  poke: number;

  @Column('int', { name: 'click', unsigned: true, default: () => "'0'" })
  click: number;

  @Column('int', { name: 'mobilelogin', unsigned: true, default: () => "'0'" })
  mobilelogin: number;

  @Column('int', { name: 'connectlogin', unsigned: true, default: () => "'0'" })
  connectlogin: number;

  @Column('int', { name: 'sendpm', unsigned: true, default: () => "'0'" })
  sendpm: number;

  @Column('int', { name: 'friend', unsigned: true, default: () => "'0'" })
  friend: number;

  @Column('int', { name: 'addfriend', unsigned: true, default: () => "'0'" })
  addfriend: number;
}
