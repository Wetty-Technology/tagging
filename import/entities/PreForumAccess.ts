import { Column, Entity, Index } from 'typeorm';

@Index('listorder', ['fid', 'dateline'], {})
@Entity('forum_access')
export class PreForumAccess {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('tinyint', { name: 'allowview', width: 1, default: () => "'0'" })
  allowview: boolean;

  @Column('tinyint', { name: 'allowpost', width: 1, default: () => "'0'" })
  allowpost: boolean;

  @Column('tinyint', { name: 'allowreply', width: 1, default: () => "'0'" })
  allowreply: boolean;

  @Column('tinyint', { name: 'allowgetattach', width: 1, default: () => "'0'" })
  allowgetattach: boolean;

  @Column('tinyint', {
    name: 'allowpostattach',
    width: 1,
    default: () => "'0'",
  })
  allowpostattach: boolean;

  @Column('tinyint', { name: 'allowpostimage', width: 1, default: () => "'0'" })
  allowpostimage: boolean;

  @Column('mediumint', {
    name: 'adminuser',
    unsigned: true,
    default: () => "'0'",
  })
  adminuser: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'allowgetimage', width: 1, default: () => "'0'" })
  allowgetimage: boolean;
}
