import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid'], {})
@Index('uid', ['uid', 'dateline'], {})
@Entity('pre_forum_pollvoter')
export class PreForumPollvoter {
  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('mediumtext', { name: 'options' })
  options: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
