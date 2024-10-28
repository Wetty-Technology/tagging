import { Column, Entity, Index } from 'typeorm';

@Index('sortid', ['sortid'], {})
@Index('tid', ['tid'], {})
@Index('fid', ['fid'], {})
@Entity('pre_forum_typeoptionvar')
export class PreForumTypeoptionvar {
  @Column('smallint', { name: 'sortid', unsigned: true, default: () => "'0'" })
  sortid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('smallint', {
    name: 'optionid',
    unsigned: true,
    default: () => "'0'",
  })
  optionid: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('longtext', { name: 'value' })
  value: string;
}
