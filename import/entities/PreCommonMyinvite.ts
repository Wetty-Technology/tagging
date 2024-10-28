import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('hash', ['hash'], {})
@Index('uid', ['touid', 'dateline'], {})
@Entity('pre_common_myinvite')
export class PreCommonMyinvite {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'typename', length: 100 })
  typename: string;

  @Column('mediumint', { name: 'appid', default: () => "'0'" })
  appid: number;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('mediumint', {
    name: 'fromuid',
    unsigned: true,
    default: () => "'0'",
  })
  fromuid: number;

  @Column('mediumint', { name: 'touid', unsigned: true, default: () => "'0'" })
  touid: number;

  @Column('mediumtext', { name: 'myml' })
  myml: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'hash', unsigned: true, default: () => "'0'" })
  hash: number;
}
