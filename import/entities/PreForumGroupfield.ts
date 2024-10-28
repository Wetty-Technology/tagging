import { Column, Entity, Index } from 'typeorm';

@Index('types', ['fid', 'type'], { unique: true })
@Index('fid', ['fid'], {})
@Index('type', ['type'], {})
@Entity('pre_forum_groupfield')
export class PreForumGroupfield {
  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('tinyint', { name: 'privacy', width: 1, default: () => "'0'" })
  privacy: boolean;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('varchar', { name: 'type', length: 100 })
  type: string;

  @Column('mediumtext', { name: 'data' })
  data: string;
}
