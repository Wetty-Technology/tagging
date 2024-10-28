import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('stick', ['stick'], {})
@Index('dateline', ['dateline'], {})
@Index('expiration', ['expiration'], {})
@Index('pid', ['pid'], {})
@Entity('pre_forum_postposition')
export class PreForumPostposition {
  @Column('mediumint', { name: 'fid', unsigned: true })
  fid: number;

  @Column('mediumint', { primary: true, name: 'tid', unsigned: true })
  tid: number;

  @PrimaryGeneratedColumn({ type: 'int', name: 'position', unsigned: true })
  position: number;

  @Column('int', { name: 'pid', unsigned: true })
  pid: number;

  @Column('tinyint', { name: 'stick', width: 1 })
  stick: boolean;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true })
  expiration: number;
}
