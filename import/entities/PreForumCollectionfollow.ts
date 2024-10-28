import { Column, Entity, Index } from 'typeorm';

@Index('ctid', ['ctid', 'dateline'], {})
@Entity('pre_forum_collectionfollow')
export class PreForumCollectionfollow {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;

  @Column('mediumint', {
    primary: true,
    name: 'ctid',
    unsigned: true,
    default: () => "'0'",
  })
  ctid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'lastvisit', unsigned: true, default: () => "'0'" })
  lastvisit: number;
}
