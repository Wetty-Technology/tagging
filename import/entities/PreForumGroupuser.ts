import { Column, Entity, Index } from 'typeorm';

@Index('uid_lastupdate', ['uid', 'lastupdate'], {})
@Index('userlist', ['fid', 'level', 'lastupdate'], {})
@Entity('forum_groupuser')
export class PreForumGroupuser {
  @Column('mediumint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('tinyint', { name: 'level', unsigned: true, default: () => "'0'" })
  level: number;

  @Column('mediumint', {
    name: 'threads',
    unsigned: true,
    default: () => "'0'",
  })
  threads: number;

  @Column('mediumint', {
    name: 'replies',
    unsigned: true,
    default: () => "'0'",
  })
  replies: number;

  @Column('int', { name: 'joindateline', unsigned: true, default: () => "'0'" })
  joindateline: number;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('tinyint', { name: 'privacy', width: 1, default: () => "'0'" })
  privacy: boolean;
}
