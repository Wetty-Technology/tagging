import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid'], {})
@Index('uid', ['uid'], {})
@Entity('forum_post_location')
export class PreForumPostLocation {
  @Column('int', {
    primary: true,
    name: 'pid',
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column('int', {
    name: 'tid',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  tid: number | null;

  @Column('mediumint', {
    name: 'uid',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  uid: number | null;

  @Column('varchar', { name: 'mapx', length: 255 })
  mapx: string;

  @Column('varchar', { name: 'mapy', length: 255 })
  mapy: string;

  @Column('varchar', { name: 'location', length: 255 })
  location: string;
}
