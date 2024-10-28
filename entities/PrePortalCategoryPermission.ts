import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('pre_portal_category_permission')
export class PrePortalCategoryPermission {
  @Column('mediumint', {
    primary: true,
    name: 'catid',
    unsigned: true,
    default: () => "'0'",
  })
  catid: number;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('tinyint', { name: 'allowpublish', width: 1, default: () => "'0'" })
  allowpublish: boolean;

  @Column('tinyint', { name: 'allowmanage', width: 1, default: () => "'0'" })
  allowmanage: boolean;

  @Column('tinyint', { name: 'allowpush', width: 1, default: () => "'0'" })
  allowpush: boolean;

  @Column('mediumint', { name: 'inheritedcatid', default: () => "'0'" })
  inheritedcatid: number;
}
