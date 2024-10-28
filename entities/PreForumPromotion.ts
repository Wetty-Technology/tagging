import { Column, Entity } from 'typeorm';

@Entity('pre_forum_promotion')
export class PreForumPromotion {
  @Column('varchar', { primary: true, name: 'ip', length: 45 })
  ip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'username', length: 15 })
  username: string;
}
