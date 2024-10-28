import { Column, Entity, Index } from 'typeorm';

@Index('tid', ['tid'], {})
@Index('uid', ['recommenduid'], {})
@Entity('pre_forum_memberrecommend')
export class PreForumMemberrecommend {
  @Column('int', { name: 'tid', unsigned: true })
  tid: number;

  @Column('mediumint', { name: 'recommenduid', unsigned: true })
  recommenduid: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;
}
