import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('global', ['global'], {})
@Entity('forum_threadprofile')
export class PreForumThreadprofile {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('char', { name: 'name', length: 100 })
  name: string;

  @Column('mediumtext', { name: 'template' })
  template: string;

  @Column('tinyint', { name: 'global', width: 1, default: () => "'0'" })
  global: boolean;
}
