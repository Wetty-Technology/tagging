import { Column, Entity, Index } from 'typeorm';

@Index('tagname', ['tagname', 'appid'], {})
@Entity('pre_ucenter_tags')
export class PreUcenterTags {
  @Column('char', { name: 'tagname', length: 20 })
  tagname: string;

  @Column('smallint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('longtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('int', { name: 'expiration', unsigned: true })
  expiration: number;
}
