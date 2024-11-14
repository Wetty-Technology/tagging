import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('displayplay', ['displayorder'], {})
@Entity('forum_faq')
export class PreForumFaq {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id' })
  id: number;

  @Column('smallint', { name: 'fpid', unsigned: true, default: () => "'0'" })
  fpid: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('varchar', { name: 'identifier', length: 20 })
  identifier: string;

  @Column('varchar', { name: 'keyword', length: 50 })
  keyword: string;

  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @Column('mediumtext', { name: 'message' })
  message: string;
}
