import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('raterid', ['raterid', 'type', 'dateline'], {})
@Index('rateeid', ['rateeid', 'type', 'dateline'], {})
@Index('orderid', ['orderid'], {})
@Entity('pre_forum_tradecomment')
export class PreForumTradecomment {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id' })
  id: number;

  @Column('char', { name: 'orderid', length: 32 })
  orderid: string;

  @Column('int', { name: 'pid', unsigned: true })
  pid: number;

  @Column('tinyint', { name: 'type', width: 1 })
  type: boolean;

  @Column('mediumint', { name: 'raterid', unsigned: true })
  raterid: number;

  @Column('char', { name: 'rater', length: 15 })
  rater: string;

  @Column('mediumint', { name: 'rateeid', unsigned: true })
  rateeid: number;

  @Column('char', { name: 'ratee', length: 15 })
  ratee: string;

  @Column('char', { name: 'message', length: 200 })
  message: string;

  @Column('char', { name: 'explanation', length: 200 })
  explanation: string;

  @Column('tinyint', { name: 'score', width: 1 })
  score: boolean;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;
}
