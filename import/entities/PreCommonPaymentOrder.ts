import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('out_biz_no', ['outBizNo'], { unique: true })
@Index('uid', ['uid'], {})
@Index('type', ['type'], {})
@Index('status', ['status'], {})
@Entity('pre_common_payment_order')
export class PreCommonPaymentOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'out_biz_no', unique: true, length: 64 })
  outBizNo: string;

  @Column('varchar', { name: 'type', length: 190 })
  type: string;

  @Column('varchar', { name: 'type_name', nullable: true, length: 255 })
  typeName: string | null;

  @Column('int', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'amount', unsigned: true })
  amount: number;

  @Column('int', { name: 'amount_fee', unsigned: true })
  amountFee: number;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('int', { name: 'expire_time', unsigned: true })
  expireTime: number;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('varchar', { name: 'return_url', nullable: true, length: 255 })
  returnUrl: string | null;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;

  @Column('varchar', { name: 'clientip', length: 255 })
  clientip: string;

  @Column('smallint', {
    name: 'remoteport',
    unsigned: true,
    default: () => "'0'",
  })
  remoteport: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('varchar', { name: 'trade_no', nullable: true, length: 255 })
  tradeNo: string | null;

  @Column('varchar', { name: 'channel', nullable: true, length: 255 })
  channel: string | null;

  @Column('int', { name: 'payment_time', nullable: true, unsigned: true })
  paymentTime: number | null;

  @Column('tinyint', {
    name: 'callback_status',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  callbackStatus: boolean | null;
}
