import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid', 'updatetime'], {})
@Index('updatetime', ['updatetime'], {})
@Entity('pre_home_album')
export class PreHomeAlbum {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'albumid',
    unsigned: true,
  })
  albumid: number;

  @Column('varchar', { name: 'albumname', length: 50 })
  albumname: string;

  @Column('smallint', { name: 'catid', unsigned: true, default: () => "'0'" })
  catid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'updatetime', unsigned: true, default: () => "'0'" })
  updatetime: number;

  @Column('smallint', { name: 'picnum', unsigned: true, default: () => "'0'" })
  picnum: number;

  @Column('varchar', { name: 'pic', length: 255 })
  pic: string;

  @Column('tinyint', { name: 'picflag', width: 1, default: () => "'0'" })
  picflag: boolean;

  @Column('tinyint', { name: 'friend', width: 1, default: () => "'0'" })
  friend: boolean;

  @Column('varchar', { name: 'password', length: 10 })
  password: string;

  @Column('mediumtext', { name: 'target_ids' })
  targetIds: string;

  @Column('mediumint', { name: 'favtimes', unsigned: true })
  favtimes: number;

  @Column('mediumint', { name: 'sharetimes', unsigned: true })
  sharetimes: number;

  @Column('mediumtext', { name: 'depict' })
  depict: string;
}
