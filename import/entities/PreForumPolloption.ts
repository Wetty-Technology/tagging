import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tid', ['tid', 'displayorder'], {})
@Entity('forum_polloption')
export class PreForumPolloption {
  @PrimaryGeneratedColumn({ type: 'int', name: 'polloptionid', unsigned: true })
  polloptionid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('mediumint', { name: 'votes', unsigned: true, default: () => "'0'" })
  votes: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'polloption', length: 80 })
  polloption: string;

  @Column('longtext', { name: 'voterids' })
  voterids: string;
}
