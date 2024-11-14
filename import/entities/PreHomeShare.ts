import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Index('hot', ['hot'], {})
@Index('dateline', ['dateline'], {})
@Entity('home_share')
export class PreHomeShare {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'sid', unsigned: true })
  sid: number;

  @Column('varchar', { name: 'type', length: 30 })
  type: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'title_template' })
  titleTemplate: string;

  @Column('mediumtext', { name: 'body_template' })
  bodyTemplate: string;

  @Column('mediumtext', { name: 'body_data' })
  bodyData: string;

  @Column('mediumtext', { name: 'body_general' })
  bodyGeneral: string;

  @Column('varchar', { name: 'image', length: 255 })
  image: string;

  @Column('varchar', { name: 'image_link', length: 255 })
  imageLink: string;

  @Column('mediumint', { name: 'hot', unsigned: true, default: () => "'0'" })
  hot: number;

  @Column('mediumtext', { name: 'hotuser' })
  hotuser: string;

  @Column('mediumint', { name: 'itemid', unsigned: true })
  itemid: number;

  @Column('mediumint', {
    name: 'fromuid',
    unsigned: true,
    default: () => "'0'",
  })
  fromuid: number;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;
}
