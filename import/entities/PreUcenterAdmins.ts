import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('username', ['username'], { unique: true })
@Entity('pre_ucenter_admins')
export class PreUcenterAdmins {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'uid', unsigned: true })
  uid: number;

  @Column('char', { name: 'username', unique: true, length: 15 })
  username: string;

  @Column('tinyint', {
    name: 'allowadminsetting',
    width: 1,
    default: () => "'0'",
  })
  allowadminsetting: boolean;

  @Column('tinyint', { name: 'allowadminapp', width: 1, default: () => "'0'" })
  allowadminapp: boolean;

  @Column('tinyint', { name: 'allowadminuser', width: 1, default: () => "'0'" })
  allowadminuser: boolean;

  @Column('tinyint', {
    name: 'allowadminbadword',
    width: 1,
    default: () => "'0'",
  })
  allowadminbadword: boolean;

  @Column('tinyint', { name: 'allowadmintag', width: 1, default: () => "'0'" })
  allowadmintag: boolean;

  @Column('tinyint', { name: 'allowadminpm', width: 1, default: () => "'0'" })
  allowadminpm: boolean;

  @Column('tinyint', {
    name: 'allowadmincredits',
    width: 1,
    default: () => "'0'",
  })
  allowadmincredits: boolean;

  @Column('tinyint', {
    name: 'allowadmindomain',
    width: 1,
    default: () => "'0'",
  })
  allowadmindomain: boolean;

  @Column('tinyint', { name: 'allowadmindb', width: 1, default: () => "'0'" })
  allowadmindb: boolean;

  @Column('tinyint', { name: 'allowadminnote', width: 1, default: () => "'0'" })
  allowadminnote: boolean;

  @Column('tinyint', {
    name: 'allowadmincache',
    width: 1,
    default: () => "'0'",
  })
  allowadmincache: boolean;

  @Column('tinyint', { name: 'allowadminlog', width: 1, default: () => "'0'" })
  allowadminlog: boolean;
}
