import { Column, Entity } from 'typeorm';

@Entity('common_member_field_forum_archive')
export class PreCommonMemberFieldForumArchive {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('tinyint', { name: 'publishfeed', default: () => "'0'" })
  publishfeed: number;

  @Column('tinyint', {
    name: 'customshow',
    unsigned: true,
    default: () => "'26'",
  })
  customshow: number;

  @Column('varchar', { name: 'customstatus', length: 30 })
  customstatus: string;

  @Column('mediumtext', { name: 'medals' })
  medals: string;

  @Column('mediumtext', { name: 'sightml' })
  sightml: string;

  @Column('mediumtext', { name: 'groupterms' })
  groupterms: string;

  @Column('varchar', { name: 'authstr', length: 20 })
  authstr: string;

  @Column('longtext', { name: 'groups' })
  groups: string;

  @Column('varchar', { name: 'attentiongroup', length: 255 })
  attentiongroup: string;
}
