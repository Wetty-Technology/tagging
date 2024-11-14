import { Column, Entity, Index } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Entity('forum_postcache')
export class PreForumPostcache {
  @Column('int', { primary: true, name: 'pid', unsigned: true })
  pid: number;

  @Column('mediumtext', { name: 'comment' })
  comment: string;

  @Column('mediumtext', { name: 'rate' })
  rate: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
