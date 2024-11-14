import { Column, Entity, Index } from 'typeorm';

@Index('code', ['code'], { unique: true })
@Index('createtime', ['createtime'], {})
@Entity('mobile_wechat_authcode')
export class PreMobileWechatAuthcode {
  @Column('char', { primary: true, name: 'sid', length: 6 })
  sid: string;

  @Column('int', { name: 'code', unique: true, unsigned: true })
  code: number;

  @Column('mediumint', { name: 'uid', unsigned: true })
  uid: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('int', { name: 'createtime', unsigned: true })
  createtime: number;
}
