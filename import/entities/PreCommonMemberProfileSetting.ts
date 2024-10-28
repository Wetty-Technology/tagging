import { Column, Entity } from 'typeorm';

@Entity('pre_common_member_profile_setting')
export class PreCommonMemberProfileSetting {
  @Column('varchar', { primary: true, name: 'fieldid', length: 190 })
  fieldid: string;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('tinyint', { name: 'invisible', width: 1, default: () => "'0'" })
  invisible: boolean;

  @Column('tinyint', { name: 'needverify', width: 1, default: () => "'0'" })
  needverify: boolean;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('smallint', {
    name: 'displayorder',
    unsigned: true,
    default: () => "'0'",
  })
  displayorder: number;

  @Column('tinyint', { name: 'required', width: 1, default: () => "'0'" })
  required: boolean;

  @Column('tinyint', { name: 'unchangeable', width: 1, default: () => "'0'" })
  unchangeable: boolean;

  @Column('tinyint', { name: 'showinthread', width: 1, default: () => "'0'" })
  showinthread: boolean;

  @Column('tinyint', { name: 'allowsearch', width: 1, default: () => "'0'" })
  allowsearch: boolean;

  @Column('varchar', { name: 'formtype', length: 255 })
  formtype: string;

  @Column('smallint', { name: 'size', unsigned: true, default: () => "'0'" })
  size: number;

  @Column('mediumtext', { name: 'choices' })
  choices: string;

  @Column('mediumtext', { name: 'validate' })
  validate: string;

  @Column('tinyint', { name: 'showincard', width: 1, default: () => "'0'" })
  showincard: boolean;

  @Column('tinyint', { name: 'showinregister', width: 1, default: () => "'0'" })
  showinregister: boolean;
}
