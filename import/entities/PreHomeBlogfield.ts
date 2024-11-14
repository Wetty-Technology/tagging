import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('home_blogfield')
export class PreHomeBlogfield {
  @Column('mediumint', {
    primary: true,
    name: 'blogid',
    unsigned: true,
    default: () => "'0'",
  })
  blogid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'pic', length: 255 })
  pic: string;

  @Column('varchar', { name: 'tag', length: 255 })
  tag: string;

  @Column('longtext', { name: 'message' })
  message: string;

  @Column('varchar', { name: 'postip', length: 255 })
  postip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('mediumtext', { name: 'related' })
  related: string;

  @Column('int', { name: 'relatedtime', unsigned: true, default: () => "'0'" })
  relatedtime: number;

  @Column('mediumtext', { name: 'target_ids' })
  targetIds: string;

  @Column('mediumtext', { name: 'hotuser' })
  hotuser: string;

  @Column('tinyint', { name: 'magiccolor', default: () => "'0'" })
  magiccolor: number;

  @Column('tinyint', { name: 'magicpaper', default: () => "'0'" })
  magicpaper: number;

  @Column('mediumint', { name: 'pushedaid', default: () => "'0'" })
  pushedaid: number;
}
