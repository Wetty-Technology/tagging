import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_secquestion')
export class PreCommonSecquestion {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('tinyint', { name: 'type', unsigned: true })
  type: number;

  @Column('mediumtext', { name: 'question' })
  question: string;

  @Column('varchar', { name: 'answer', length: 255 })
  answer: string;
}
