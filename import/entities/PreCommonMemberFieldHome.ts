import { Column, Entity, Index } from 'typeorm';

@Index('domain', ['domain'], {})
@Entity('pre_common_member_field_home')
export class PreCommonMemberFieldHome {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('varchar', { name: 'videophoto', length: 255 })
  videophoto: string;

  @Column('varchar', { name: 'spacename', length: 255 })
  spacename: string;

  @Column('varchar', { name: 'spacedescription', length: 255 })
  spacedescription: string;

  @Column('char', { name: 'domain', length: 15 })
  domain: string;

  @Column('int', { name: 'addsize', unsigned: true, default: () => "'0'" })
  addsize: number;

  @Column('smallint', {
    name: 'addfriend',
    unsigned: true,
    default: () => "'0'",
  })
  addfriend: number;

  @Column('tinyint', { name: 'allowasfriend', width: 1, default: () => "'1'" })
  allowasfriend: boolean;

  @Column('tinyint', { name: 'allowasfollow', width: 1, default: () => "'1'" })
  allowasfollow: boolean;

  @Column('smallint', { name: 'menunum', unsigned: true, default: () => "'0'" })
  menunum: number;

  @Column('varchar', { name: 'theme', length: 20 })
  theme: string;

  @Column('mediumtext', { name: 'spacecss' })
  spacecss: string;

  @Column('mediumtext', { name: 'blockposition' })
  blockposition: string;

  @Column('mediumtext', { name: 'recentnote' })
  recentnote: string;

  @Column('mediumtext', { name: 'spacenote' })
  spacenote: string;

  @Column('mediumtext', { name: 'privacy' })
  privacy: string;

  @Column('longtext', { name: 'feedfriend' })
  feedfriend: string;

  @Column('mediumtext', { name: 'acceptemail' })
  acceptemail: string;

  @Column('mediumtext', { name: 'magicgift' })
  magicgift: string;

  @Column('mediumtext', { name: 'stickblogs' })
  stickblogs: string;
}
