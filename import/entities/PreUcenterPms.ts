import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('msgtoid', ['msgtoid', 'folder', 'dateline'], {})
@Index('msgfromid', ['msgfromid', 'folder', 'dateline'], {})
@Index('related', ['related'], {})
@Index('getnum', ['msgtoid', 'folder', 'delstatus'], {})
@Entity('ucenter_pms')
export class PreUcenterPms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pmid', unsigned: true })
  pmid: number;

  @Column('varchar', { name: 'msgfrom', length: 15 })
  msgfrom: string;

  @Column('mediumint', {
    name: 'msgfromid',
    unsigned: true,
    default: () => "'0'",
  })
  msgfromid: number;

  @Column('mediumint', {
    name: 'msgtoid',
    unsigned: true,
    default: () => "'0'",
  })
  msgtoid: number;

  @Column('enum', {
    name: 'folder',
    enum: ['inbox', 'outbox'],
    default: () => "'inbox'",
  })
  folder: 'inbox' | 'outbox';

  @Column('tinyint', { name: 'new', width: 1, default: () => "'0'" })
  new: boolean;

  @Column('varchar', { name: 'subject', length: 75 })
  subject: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('text', { name: 'message' })
  message: string;

  @Column('tinyint', {
    name: 'delstatus',
    unsigned: true,
    default: () => "'0'",
  })
  delstatus: number;

  @Column('int', { name: 'related', unsigned: true, default: () => "'0'" })
  related: number;

  @Column('smallint', {
    name: 'fromappid',
    unsigned: true,
    default: () => "'0'",
  })
  fromappid: number;
}
