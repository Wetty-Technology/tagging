import { Column, Entity } from 'typeorm';

@Entity('forum_hotreply_member')
export class PreForumHotreplyMember {
  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('int', {
    primary: true,
    name: 'pid',
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('tinyint', { name: 'attitude', width: 1, default: () => "'0'" })
  attitude: boolean;
}
