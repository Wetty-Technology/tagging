import { Column, Entity } from 'typeorm';

@Entity('common_optimizer')
export class PreCommonOptimizer {
  @Column('char', { primary: true, name: 'k', length: 100 })
  k: string;

  @Column('char', { name: 'v', length: 255 })
  v: string;
}
