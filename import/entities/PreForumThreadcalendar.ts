import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fid', ['fid', 'dateline'], {})
@Entity('pre_forum_threadcalendar')
export class PreForumThreadcalendar {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'hotnum', unsigned: true, default: () => "'0'" })
  hotnum: number;
}
