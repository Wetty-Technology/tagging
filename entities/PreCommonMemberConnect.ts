import { Column, Entity, Index } from 'typeorm';

@Index('conuin', ['conuin'], {})
@Index('conopenid', ['conopenid'], {})
@Entity('pre_common_member_connect')
export class PreCommonMemberConnect {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('char', { name: 'conuin', length: 40 })
  conuin: string;

  @Column('char', { name: 'conuinsecret', length: 16 })
  conuinsecret: string;

  @Column('char', { name: 'conopenid', length: 32 })
  conopenid: string;

  @Column('tinyint', { name: 'conisfeed', width: 1, default: () => "'0'" })
  conisfeed: boolean;

  @Column('tinyint', {
    name: 'conispublishfeed',
    width: 1,
    default: () => "'0'",
  })
  conispublishfeed: boolean;

  @Column('tinyint', { name: 'conispublisht', width: 1, default: () => "'0'" })
  conispublisht: boolean;

  @Column('tinyint', { name: 'conisregister', width: 1, default: () => "'0'" })
  conisregister: boolean;

  @Column('tinyint', {
    name: 'conisqzoneavatar',
    width: 1,
    default: () => "'0'",
  })
  conisqzoneavatar: boolean;

  @Column('tinyint', { name: 'conisqqshow', width: 1, default: () => "'0'" })
  conisqqshow: boolean;

  @Column('char', { name: 'conuintoken', length: 32 })
  conuintoken: string;
}
