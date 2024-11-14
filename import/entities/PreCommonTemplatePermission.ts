import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('common_template_permission')
export class PreCommonTemplatePermission {
  @Column('varchar', { primary: true, name: 'targettplname', length: 100 })
  targettplname: string;

  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('tinyint', { name: 'allowmanage', width: 1, default: () => "'0'" })
  allowmanage: boolean;

  @Column('tinyint', { name: 'allowrecommend', width: 1, default: () => "'0'" })
  allowrecommend: boolean;

  @Column('tinyint', { name: 'needverify', width: 1, default: () => "'0'" })
  needverify: boolean;

  @Column('varchar', { name: 'inheritedtplname', length: 255 })
  inheritedtplname: string;
}
