import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_forum_bbcode')
export class PreForumBbcode {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('varchar', { name: 'tag', length: 100 })
  tag: string;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('mediumtext', { name: 'replacement' })
  replacement: string;

  @Column('varchar', { name: 'example', length: 255 })
  example: string;

  @Column('mediumtext', { name: 'explanation' })
  explanation: string;

  @Column('tinyint', { name: 'params', unsigned: true, default: () => "'1'" })
  params: number;

  @Column('mediumtext', { name: 'prompt' })
  prompt: string;

  @Column('tinyint', { name: 'nest', unsigned: true, default: () => "'1'" })
  nest: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('mediumtext', { name: 'perm' })
  perm: string;
}
