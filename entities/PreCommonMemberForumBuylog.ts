import { Column, Entity, Index } from 'typeorm';

@Index('fid', ['fid'], {})
@Entity('pre_common_member_forum_buylog')
export class PreCommonMemberForumBuylog {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('int', { name: 'credits', unsigned: true, default: () => "'0'" })
  credits: number;
}
