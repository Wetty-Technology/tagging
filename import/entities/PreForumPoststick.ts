import { Column, Entity, Index } from 'typeorm';

@Index('dateline', ['tid', 'dateline'], {})
@Entity('pre_forum_poststick')
export class PreForumPoststick {
  @Column('int', { primary: true, name: 'tid', unsigned: true })
  tid: number;

  @Column('int', { primary: true, name: 'pid', unsigned: true })
  pid: number;

  @Column('int', { name: 'position', unsigned: true })
  position: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;
}
