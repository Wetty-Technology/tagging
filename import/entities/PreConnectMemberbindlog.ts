import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Index('uin', ['uin'], {})
@Index('dateline', ['dateline'], {})
@Entity('connect_memberbindlog')
export class PreConnectMemberbindlog {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'mblid', unsigned: true })
  mblid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'uin', length: 40 })
  uin: string;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
