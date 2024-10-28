import { Column, Entity, Index } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Entity('pre_forum_collectioninvite')
export class PreForumCollectioninvite {
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

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
