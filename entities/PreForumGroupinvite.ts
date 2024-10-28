import { Column, Entity, Index } from 'typeorm';

@Index('ids', ['fid', 'inviteuid'], { unique: true })
@Index('dateline', ['dateline'], {})
@Entity('pre_forum_groupinvite')
export class PreForumGroupinvite {
  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('mediumint', {
    name: 'inviteuid',
    unsigned: true,
    default: () => "'0'",
  })
  inviteuid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
