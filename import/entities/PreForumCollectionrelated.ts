import { Column, Entity } from 'typeorm';

@Entity('forum_collectionrelated')
export class PreForumCollectionrelated {
  @Column('mediumint', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('mediumtext', { name: 'collection' })
  collection: string;
}
