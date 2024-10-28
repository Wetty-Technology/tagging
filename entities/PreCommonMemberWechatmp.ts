import { Column, Entity, Index } from 'typeorm';

@Index('openid', ['openid'], {})
@Entity('pre_common_member_wechatmp')
export class PreCommonMemberWechatmp {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'openid', length: 32 })
  openid: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;
}
