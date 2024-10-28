import { Column, Entity } from 'typeorm';

@Entity('pre_forum_onlinelist')
export class PreForumOnlinelist {
  @Column('smallint', { name: 'groupid', unsigned: true, default: () => "'0'" })
  groupid: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'title', length: 30 })
  title: string;

  @Column('varchar', { name: 'url', length: 30 })
  url: string;
}
