import { Column, Entity, Index } from 'typeorm';

@Index('orderid', ['orderid'], { unique: true })
@Index('submitdate', ['submitdate'], {})
@Index('uid', ['uid', 'submitdate'], {})
@Entity('forum_order')
export class PreForumOrder {
  @Column('char', { name: 'orderid', length: 32 })
  orderid: string;

  @Column('char', { name: 'status', length: 3 })
  status: string;

  @Column('char', { name: 'buyer', length: 50 })
  buyer: string;

  @Column('char', { name: 'admin', length: 15 })
  admin: string;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'amount', unsigned: true, default: () => "'0'" })
  amount: number;

  @Column('float', {
    name: 'price',
    unsigned: true,
    precision: 7,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number;

  @Column('int', { name: 'submitdate', unsigned: true, default: () => "'0'" })
  submitdate: number;

  @Column('int', { name: 'confirmdate', unsigned: true, default: () => "'0'" })
  confirmdate: number;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;

  @Column('smallint', { name: 'port', unsigned: true, default: () => "'0'" })
  port: number;
}
