import { Column, Entity, Index } from 'typeorm';

@Index('ctid', ['ctid', 'dateline'], {})
@Entity('forum_collectionthread')
export class PreForumCollectionthread {
  @Column('mediumint', {
    primary: true,
    name: 'ctid',
    unsigned: true,
    default: () => "'0'",
  })
  ctid: number;

  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'reason', length: 255 })
  reason: string;
}
