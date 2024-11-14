import { Column, Entity, Index } from 'typeorm';

@Index('fid', ['fid'], {})
@Index('dateline', ['dateline'], {})
@Index('countryorigin', ['countryorigin'], {})
@Entity('forum_optionvalue52')
export class PreForumOptionvalue52 {
  @Column('smallint', {
    name: 'countryorigin',
    unsigned: true,
    default: () => "'0'",
  })
  countryorigin: number;

  @Column('longtext', { name: 'preview' })
  preview: string;

  @Column('longtext', { name: 'url' })
  url: string;

  @Column('longtext', { name: 'passcode' })
  passcode: string;

  @Column('longtext', { name: 'password' })
  password: string;

  @Column('mediumint', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('smallint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;
}
