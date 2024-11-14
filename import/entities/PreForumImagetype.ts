import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forum_imagetype')
export class PreForumImagetype {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'typeid', unsigned: true })
  typeid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('char', { name: 'name', length: 20 })
  name: string;

  @Column('enum', {
    name: 'type',
    enum: ['smiley', 'icon', 'avatar'],
    default: () => "'smiley'",
  })
  type: 'smiley' | 'icon' | 'avatar';

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('char', { name: 'directory', length: 100 })
  directory: string;
}
