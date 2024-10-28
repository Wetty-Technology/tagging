import { Column, Entity, Index } from 'typeorm';

@Index('openid', ['openid'], { unique: true })
@Entity('pre_common_member_wechat')
export class PreCommonMemberWechat {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'openid', unique: true, length: 32 })
  openid: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('tinyint', {
    name: 'isregister',
    unsigned: true,
    default: () => "'0'",
  })
  isregister: number;
}
