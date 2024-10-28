import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_forum_threadtype')
export class PreForumThreadtype {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'typeid', unsigned: true })
  typeid: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('smallint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('smallint', { name: 'special', default: () => "'0'" })
  special: number;

  @Column('smallint', { name: 'modelid', unsigned: true, default: () => "'0'" })
  modelid: number;

  @Column('tinyint', { name: 'expiration', width: 1, default: () => "'0'" })
  expiration: boolean;

  @Column('mediumtext', { name: 'template' })
  template: string;

  @Column('mediumtext', { name: 'stemplate' })
  stemplate: string;

  @Column('mediumtext', { name: 'ptemplate' })
  ptemplate: string;

  @Column('mediumtext', { name: 'btemplate' })
  btemplate: string;
}
