import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Index('dateline', ['dateline'], {})
@Index('hot', ['hot'], {})
@Index('id', ['id', 'idtype'], {})
@Entity('home_feed')
export class PreHomeFeed {
  @PrimaryGeneratedColumn({ type: 'int', name: 'feedid', unsigned: true })
  feedid: number;

  @Column('smallint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('varchar', { name: 'icon', length: 30 })
  icon: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('tinyint', { name: 'friend', width: 1, default: () => "'0'" })
  friend: boolean;

  @Column('varchar', { name: 'hash_template', length: 32 })
  hashTemplate: string;

  @Column('varchar', { name: 'hash_data', length: 32 })
  hashData: string;

  @Column('mediumtext', { name: 'title_template' })
  titleTemplate: string;

  @Column('mediumtext', { name: 'title_data' })
  titleData: string;

  @Column('mediumtext', { name: 'body_template' })
  bodyTemplate: string;

  @Column('mediumtext', { name: 'body_data' })
  bodyData: string;

  @Column('mediumtext', { name: 'body_general' })
  bodyGeneral: string;

  @Column('varchar', { name: 'image_1', length: 255 })
  image_1: string;

  @Column('varchar', { name: 'image_1_link', length: 255 })
  image_1Link: string;

  @Column('varchar', { name: 'image_2', length: 255 })
  image_2: string;

  @Column('varchar', { name: 'image_2_link', length: 255 })
  image_2Link: string;

  @Column('varchar', { name: 'image_3', length: 255 })
  image_3: string;

  @Column('varchar', { name: 'image_3_link', length: 255 })
  image_3Link: string;

  @Column('varchar', { name: 'image_4', length: 255 })
  image_4: string;

  @Column('varchar', { name: 'image_4_link', length: 255 })
  image_4Link: string;

  @Column('mediumtext', { name: 'target_ids' })
  targetIds: string;

  @Column('mediumint', { name: 'id', unsigned: true, default: () => "'0'" })
  id: number;

  @Column('varchar', { name: 'idtype', length: 15 })
  idtype: string;

  @Column('mediumint', { name: 'hot', unsigned: true, default: () => "'0'" })
  hot: number;
}
