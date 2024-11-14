import { Column, Entity } from 'typeorm';

@Entity('forum_statlog')
export class PreForumStatlog {
  @Column('date', { primary: true, name: 'logdate' })
  logdate: string;

  @Column('mediumint', { primary: true, name: 'fid', unsigned: true })
  fid: number;

  @Column('smallint', { name: 'type', unsigned: true, default: () => "'0'" })
  type: number;

  @Column('int', { name: 'value', unsigned: true, default: () => "'0'" })
  value: number;
}
