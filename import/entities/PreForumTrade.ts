import { Column, Entity, Index } from 'typeorm';

@Index('sellerid', ['sellerid'], {})
@Index('totalitems', ['totalitems'], {})
@Index('tradesum', ['tradesum'], {})
@Index('displayorder', ['tid', 'displayorder'], {})
@Index('sellertrades', ['sellerid', 'tradesum', 'totalitems'], {})
@Index('typeid', ['typeid'], {})
@Index('credittradesum', ['credittradesum'], {})
@Index('expiration', ['expiration'], {})
@Index('pid', ['pid'], {})
@Entity('forum_trade')
export class PreForumTrade {
  @Column('int', { primary: true, name: 'tid', unsigned: true })
  tid: number;

  @Column('int', { primary: true, name: 'pid', unsigned: true })
  pid: number;

  @Column('smallint', { name: 'typeid', unsigned: true })
  typeid: number;

  @Column('mediumint', { name: 'sellerid', unsigned: true })
  sellerid: number;

  @Column('char', { name: 'seller', length: 15 })
  seller: string;

  @Column('char', { name: 'account', length: 50 })
  account: string;

  @Column('char', { name: 'tenpayaccount', length: 20 })
  tenpayaccount: string;

  @Column('char', { name: 'subject', length: 100 })
  subject: string;

  @Column('decimal', { name: 'price', precision: 8, scale: 2 })
  price: string;

  @Column('smallint', { name: 'amount', unsigned: true, default: () => "'1'" })
  amount: number;

  @Column('tinyint', { name: 'quality', unsigned: true, default: () => "'0'" })
  quality: number;

  @Column('char', { name: 'locus', length: 20 })
  locus: string;

  @Column('tinyint', { name: 'transport', width: 1, default: () => "'0'" })
  transport: boolean;

  @Column('smallint', {
    name: 'ordinaryfee',
    unsigned: true,
    default: () => "'0'",
  })
  ordinaryfee: number;

  @Column('smallint', {
    name: 'expressfee',
    unsigned: true,
    default: () => "'0'",
  })
  expressfee: number;

  @Column('smallint', { name: 'emsfee', unsigned: true, default: () => "'0'" })
  emsfee: number;

  @Column('tinyint', { name: 'itemtype', width: 1, default: () => "'0'" })
  itemtype: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('char', { name: 'lastbuyer', length: 15 })
  lastbuyer: string;

  @Column('int', { name: 'lastupdate', unsigned: true, default: () => "'0'" })
  lastupdate: number;

  @Column('smallint', {
    name: 'totalitems',
    unsigned: true,
    default: () => "'0'",
  })
  totalitems: number;

  @Column('decimal', {
    name: 'tradesum',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  tradesum: string;

  @Column('tinyint', { name: 'closed', width: 1, default: () => "'0'" })
  closed: boolean;

  @Column('int', { name: 'aid', unsigned: true })
  aid: number;

  @Column('tinyint', { name: 'displayorder', width: 1 })
  displayorder: boolean;

  @Column('decimal', { name: 'costprice', precision: 8, scale: 2 })
  costprice: string;

  @Column('int', { name: 'credit', unsigned: true, default: () => "'0'" })
  credit: number;

  @Column('int', { name: 'costcredit', unsigned: true, default: () => "'0'" })
  costcredit: number;

  @Column('int', {
    name: 'credittradesum',
    unsigned: true,
    default: () => "'0'",
  })
  credittradesum: number;
}
