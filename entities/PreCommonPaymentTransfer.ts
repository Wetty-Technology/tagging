import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('out_biz_no', ['outBizNo'], { unique: true })
@Index('uid', ['uid'], {})
@Index('status', ['status'], {})
@Entity('pre_common_payment_transfer')
export class PreCommonPaymentTransfer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'uid', unsigned: true })
  uid: number;

  @Column('varchar', { name: 'out_biz_no', unique: true, length: 64 })
  outBizNo: string;

  @Column('int', { name: 'amount', unsigned: true })
  amount: number;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'realname', length: 255 })
  realname: string;

  @Column('varchar', { name: 'account', length: 255 })
  account: string;

  @Column('varchar', { name: 'channel', nullable: true, length: 255 })
  channel: string | null;

  @Column('tinyint', { name: 'status', unsigned: true })
  status: number;

  @Column('varchar', { name: 'error', nullable: true, length: 255 })
  error: string | null;

  @Column('varchar', { name: 'trade_no', nullable: true, length: 255 })
  tradeNo: string | null;

  @Column('int', { name: 'trade_time', nullable: true, unsigned: true })
  tradeTime: number | null;

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
}
