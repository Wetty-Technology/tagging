import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('re', ['itemid', 'type'], { unique: true })
@Entity('pre_tools_censorhome')
export class PreToolsCensorhome {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'itemid' })
  itemid: number;

  @Column('char', { name: 'type', length: 200 })
  type: string;
}
