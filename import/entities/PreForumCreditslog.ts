import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('pre_forum_creditslog')
export class PreForumCreditslog {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'fromto', length: 15 })
  fromto: string;

  @Column('tinyint', { name: 'sendcredits', width: 1, default: () => "'0'" })
  sendcredits: boolean;

  @Column('tinyint', { name: 'receivecredits', width: 1, default: () => "'0'" })
  receivecredits: boolean;

  @Column('int', { name: 'send', unsigned: true, default: () => "'0'" })
  send: number;

  @Column('int', { name: 'receive', unsigned: true, default: () => "'0'" })
  receive: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('char', { name: 'operation', length: 3 })
  operation: string;
}
