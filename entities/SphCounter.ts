import { Column, Entity } from 'typeorm';

@Entity('sph_counter')
export class SphCounter {
  @Column('int', { primary: true, name: 'counter_id' })
  counterId: number;

  @Column('int', { name: 'max_doc_id' })
  maxDocId: number;
}
