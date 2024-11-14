import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('find', ['find'], {})
@Entity('ucenter_badwords')
export class PreUcenterBadwords {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'admin', length: 15 })
  admin: string;

  @Column('varchar', { name: 'find', length: 255 })
  find: string;

  @Column('varchar', { name: 'replacement', length: 255 })
  replacement: string;

  @Column('varchar', { name: 'findpattern', length: 255 })
  findpattern: string;
}
