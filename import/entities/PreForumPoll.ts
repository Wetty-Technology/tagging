import { Column, Entity } from 'typeorm';

@Entity('forum_poll')
export class PreForumPoll {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('tinyint', { name: 'overt', width: 1, default: () => "'0'" })
  overt: boolean;

  @Column('tinyint', { name: 'multiple', width: 1, default: () => "'0'" })
  multiple: boolean;

  @Column('tinyint', { name: 'visible', width: 1, default: () => "'0'" })
  visible: boolean;

  @Column('tinyint', {
    name: 'maxchoices',
    unsigned: true,
    default: () => "'0'",
  })
  maxchoices: number;

  @Column('tinyint', { name: 'isimage', width: 1, default: () => "'0'" })
  isimage: boolean;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('varchar', { name: 'pollpreview', length: 255 })
  pollpreview: string;

  @Column('mediumint', { name: 'voters', unsigned: true, default: () => "'0'" })
  voters: number;
}
