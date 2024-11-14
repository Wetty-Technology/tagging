import { Column, Entity, Index } from 'typeorm';

@Index('orderid', ['orderid'], { unique: true })
@Index('sellerid', ['sellerid'], {})
@Index('buyerid', ['buyerid'], {})
@Index('status', ['status'], {})
@Index('buyerlog', ['buyerid', 'status', 'lastupdate'], {})
@Index('sellerlog', ['sellerid', 'status', 'lastupdate'], {})
@Index('tid', ['tid', 'pid'], {})
@Index('pid', ['pid'], {})
@Entity('forum_tradelog')
export class PreForumTradelog {
  @Column('int', { name: 'tid', unsigned: true })
  tid: number;

  @Column('int', { name: 'pid', unsigned: true })
  pid: number;

  @Column('varchar', { name: 'orderid', length: 32 })
  orderid: string;

  @Column('varchar', { name: 'tradeno', length: 32 })
  tradeno: string;

  @Column('tinyint', { name: 'paytype', unsigned: true, default: () => "'0'" })
  paytype: number;

  @Column('varchar', { name: 'subject', length: 100 })
  subject: string;

  @Column('decimal', {
    name: 'price',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  price: string;

  @Column('tinyint', { name: 'quality', unsigned: true, default: () => "'0'" })
  quality: number;

  @Column('tinyint', { name: 'itemtype', width: 1, default: () => "'0'" })
  itemtype: boolean;

  @Column('smallint', { name: 'number', unsigned: true, default: () => "'0'" })
  number: number;

  @Column('decimal', {
    name: 'tax',
    unsigned: true,
    precision: 6,
    scale: 2,
    default: () => "'0.00'",
  })
  tax: string;

  @Column('varchar', { name: 'locus', length: 100 })
  locus: string;

  @Column('mediumint', { name: 'sellerid', unsigned: true })
  sellerid: number;

  @Column('varchar', { name: 'seller', length: 15 })
  seller: string;

  @Column('varchar', { name: 'selleraccount', length: 50 })
  selleraccount: string;

  @Column('varchar', {
    name: 'tenpayaccount',
    length: 20,
    default: () => "'0'",
  })
  tenpayaccount: string;

  @Column('mediumint', { name: 'buyerid', unsigned: true })
  buyerid: number;

  @Column('varchar', { name: 'buyer', length: 15 })
  buyer: string;

  @Column('varchar', { name: 'buyercontact', length: 50 })
  buyercontact: string;

  @Column('smallint', {
    name: 'buyercredits',
    unsigned: true,
    default: () => "'0'",
  })
  buyercredits: number;

  @Column('varchar', { name: 'buyermsg', nullable: true, length: 200 })
  buyermsg: string | null;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('tinyint', { name: 'offline', width: 1, default: () => "'0'" })
  offline: boolean;

  @Column('varchar', { name: 'buyername', length: 50 })
  buyername: string;

  @Column('varchar', { name: 'buyerzip', length: 10 })
  buyerzip: string;

  @Column('varchar', { name: 'buyerphone', length: 20 })
  buyerphone: string;

  @Column('varchar', { name: 'buyermobile', length: 20 })
  buyermobile: string;

  @Column('tinyint', { name: 'transport', width: 1, default: () => "'0'" })
  transport: boolean;

  @Column('smallint', {
    name: 'transportfee',
    unsigned: true,
    default: () => "'0'",
  })
  transportfee: number;

  @Column('decimal', { name: 'baseprice', precision: 8, scale: 2 })
  baseprice: string;

  @Column('tinyint', { name: 'discount', width: 1, default: () => "'0'" })
  discount: boolean;

  @Column('tinyint', { name: 'ratestatus', width: 1, default: () => "'0'" })
  ratestatus: boolean;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('int', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;

  @Column('int', { name: 'basecredit', unsigned: true, default: () => "'0'" })
  basecredit: number;
}
