import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid', 'status'], {})
@Index('displayorder', ['status', 'displayorder'], {})
@Entity('home_specialuser')
export class PreHomeSpecialuser {
  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 15 })
  username: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('mediumtext', { name: 'defaultpoke', nullable: true })
  defaultpoke: string | null;

  @Column('int', { name: 'dateline', default: () => "'0'" })
  dateline: number;

  @Column('mediumtext', { name: 'reason' })
  reason: string;

  @Column('mediumint', { name: 'opuid', unsigned: true, default: () => "'0'" })
  opuid: number;

  @Column('varchar', { name: 'opusername', length: 15 })
  opusername: string;

  @Column('mediumint', {
    name: 'displayorder',
    unsigned: true,
    default: () => "'0'",
  })
  displayorder: number;
}
