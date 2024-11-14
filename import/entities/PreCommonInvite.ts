import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'dateline'], {})
@Entity('common_invite')
export class PreCommonInvite {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('char', { name: 'code', length: 20 })
  code: string;

  @Column('mediumint', { name: 'fuid', unsigned: true, default: () => "'0'" })
  fuid: number;

  @Column('char', { name: 'fusername', length: 20 })
  fusername: string;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('mediumint', { name: 'appid', unsigned: true, default: () => "'0'" })
  appid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'endtime', unsigned: true, default: () => "'0'" })
  endtime: number;

  @Column('varchar', { name: 'inviteip', length: 45 })
  inviteip: string;

  @Column('int', { name: 'regdateline', unsigned: true, default: () => "'0'" })
  regdateline: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'1'" })
  status: boolean;

  @Column('char', { name: 'orderid', length: 32 })
  orderid: string;
}
