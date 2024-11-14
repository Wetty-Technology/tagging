import { Column, Entity, Index } from 'typeorm';

@Index('pid', ['pid', 'stand'], {})
@Index('tid', ['tid', 'uid'], {})
@Index('voters', ['tid', 'voters'], {})
@Entity('forum_debatepost')
export class PreForumDebatepost {
  @Column('int', {
    primary: true,
    name: 'pid',
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column('tinyint', { name: 'stand', width: 1, default: () => "'0'" })
  stand: boolean;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'uid', unsigned: true, default: () => "'0'" })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('mediumint', { name: 'voters', unsigned: true, default: () => "'0'" })
  voters: number;

  @Column('mediumtext', { name: 'voterids' })
  voterids: string;
}
