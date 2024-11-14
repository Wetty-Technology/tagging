import { Column, Entity } from 'typeorm';

@Entity('forum_replycredit')
export class PreForumReplycredit {
  @Column('int', { primary: true, name: 'tid', unsigned: true })
  tid: number;

  @Column('int', { name: 'extcredits', unsigned: true, default: () => "'0'" })
  extcredits: number;

  @Column('tinyint', { name: 'extcreditstype', width: 1, default: () => "'0'" })
  extcreditstype: boolean;

  @Column('int', { name: 'times', unsigned: true, default: () => "'0'" })
  times: number;

  @Column('int', { name: 'membertimes', unsigned: true, default: () => "'0'" })
  membertimes: number;

  @Column('tinyint', { name: 'random', width: 1, default: () => "'0'" })
  random: boolean;
}
