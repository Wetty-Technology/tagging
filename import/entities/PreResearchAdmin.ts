import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('available', ['available'], {})
@Index('dateline', ['dateline'], {})
@Entity('research_admin')
export class PreResearchAdmin {
  @PrimaryGeneratedColumn({ type: 'int', name: 'rid' })
  rid: number;

  @Column('char', { name: 'name', length: 100 })
  name: string;

  @Column('tinyint', { name: 'available' })
  available: number;

  @Column('varchar', { name: 'tpl', length: 255 })
  tpl: string;

  @Column('tinyint', { name: 'header' })
  header: number;

  @Column('tinyint', { name: 'footer' })
  footer: number;

  @Column('int', { name: 'dateline' })
  dateline: number;

  @Column('mediumtext', { name: 'intro', comment: '????' })
  intro: string;

  @Column('tinyint', { name: 'realname', width: 1 })
  realname: boolean;

  @Column('tinyint', { name: 'phone', width: 1 })
  phone: boolean;

  @Column('tinyint', { name: 'email', width: 1 })
  email: boolean;

  @Column('tinyint', { name: 'add', width: 1 })
  add: boolean;

  @Column('tinyint', { name: 'qq', width: 1 })
  qq: boolean;
}
