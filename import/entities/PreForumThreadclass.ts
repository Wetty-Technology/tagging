import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fid', ['fid', 'displayorder'], {})
@Entity('pre_forum_threadclass')
export class PreForumThreadclass {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'typeid', unsigned: true })
  typeid: number;

  @Column('mediumint', { name: 'fid', unsigned: true })
  fid: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('mediumint', { name: 'displayorder' })
  displayorder: number;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('tinyint', { name: 'moderators', width: 1, default: () => "'0'" })
  moderators: boolean;
}
