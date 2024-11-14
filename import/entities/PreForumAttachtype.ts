import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fid', ['fid'], {})
@Entity('forum_attachtype')
export class PreForumAttachtype {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('mediumint', { name: 'fid', unsigned: true, default: () => "'0'" })
  fid: number;

  @Column('char', { name: 'extension', length: 12 })
  extension: string;

  @Column('int', { name: 'maxsize', unsigned: true, default: () => "'0'" })
  maxsize: number;
}
