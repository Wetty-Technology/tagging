import { Column, Entity, Index } from 'typeorm';

@Index('fuid', ['fuid'], {})
@Index('dateline', ['uid', 'dateline'], {})
@Entity('pre_home_friend_request')
export class PreHomeFriendRequest {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'fuid',
    unsigned: true,
    default: () => "'0'",
  })
  fuid: number;

  @Column('char', { name: 'fusername', length: 15 })
  fusername: string;

  @Column('smallint', { name: 'gid', unsigned: true, default: () => "'0'" })
  gid: number;

  @Column('char', { name: 'note', length: 60 })
  note: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
