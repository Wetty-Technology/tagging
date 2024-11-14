import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ucenter_amy_pm_heart')
export class PreUcenterAmyPmHeart {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: 'id',
    unsigned: true,
  })
  id: number;

  @Column('int', {
    name: 'plid',
    comment: '会话列表ID',
    unsigned: true,
    default: () => "'0'",
  })
  plid: number;

  @Column('int', {
    name: 'uid',
    comment: '用户id',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('int', {
    name: 'from_uid',
    comment: '对话用户id',
    unsigned: true,
    default: () => "'0'",
  })
  fromUid: number;

  @Column('int', {
    name: 'last_received',
    comment: '最近一次客户端接收',
    unsigned: true,
    default: () => "'0'",
  })
  lastReceived: number;
}
