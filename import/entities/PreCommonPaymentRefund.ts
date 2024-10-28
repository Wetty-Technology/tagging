import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('out_biz_no', ['outBizNo'], { unique: true })
@Index('order_id', ['orderId'], {})
@Entity('pre_common_payment_refund')
export class PreCommonPaymentRefund {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'order_id', unsigned: true })
  orderId: number;

  @Column('varchar', { name: 'out_biz_no', unique: true, length: 64 })
  outBizNo: string;

  @Column('int', { name: 'amount', unsigned: true })
  amount: number;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('varchar', { name: 'error', nullable: true, length: 255 })
  error: string | null;

  @Column('int', { name: 'refund_time', nullable: true })
  refundTime: number | null;

  @Column('varchar', { name: 'clientip', length: 255 })
  clientip: string;

  @Column('smallint', {
    name: 'remoteport',
    unsigned: true,
    default: () => "'0'",
  })
  remoteport: number;

  @Column('int', { name: 'dateline' })
  dateline: number;
}
