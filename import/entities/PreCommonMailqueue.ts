import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('mcid', ['cid', 'dateline'], {})
@Entity('common_mailqueue')
export class PreCommonMailqueue {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'qid', unsigned: true })
  qid: number;

  @Column('mediumint', { name: 'cid', unsigned: true, default: () => "'0'" })
  cid: number;

  @Column('mediumtext', { name: 'subject' })
  subject: string;

  @Column('mediumtext', { name: 'message' })
  message: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
