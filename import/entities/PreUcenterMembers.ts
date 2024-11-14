import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('username', ['username'], { unique: true })
@Index('secmobile', ['secmobile', 'secmobicc'], {})
@Index('email', ['email'], {})
@Entity('ucenter_members')
export class PreUcenterMembers {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'username', unique: true, length: 15 })
  username: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'secmobicc', length: 3 })
  secmobicc: string;

  @Column('varchar', { name: 'secmobile', length: 12 })
  secmobile: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('char', { name: 'myid', length: 30 })
  myid: string;

  @Column('char', { name: 'myidkey', length: 16 })
  myidkey: string;

  @Column('varchar', { name: 'regip', length: 45 })
  regip: string;

  @Column('int', { name: 'regdate', unsigned: true, default: () => "'0'" })
  regdate: number;

  @Column('int', { name: 'lastloginip', default: () => "'0'" })
  lastloginip: number;

  @Column('int', {
    name: 'lastlogintime',
    unsigned: true,
    default: () => "'0'",
  })
  lastlogintime: number;

  @Column('varchar', { name: 'salt', length: 20 })
  salt: string;

  @Column('char', { name: 'secques', length: 8 })
  secques: string;
}
