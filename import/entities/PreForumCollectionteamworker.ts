import { Column, Entity } from 'typeorm';

@Entity('forum_collectionteamworker')
export class PreForumCollectionteamworker {
  @Column('mediumint', {
    primary: true,
    name: 'ctid',
    unsigned: true,
    default: () => "'0'",
  })
  ctid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'lastvisit', unsigned: true, default: () => "'0'" })
  lastvisit: number;
}
