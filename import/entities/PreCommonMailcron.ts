import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('sendtime', ['sendtime'], {})
@Entity('pre_common_mailcron')
export class PreCommonMailcron {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'cid', unsigned: true })
  cid: number;

  @Column('mediumint', { name: 'touid', unsigned: true, default: () => "'0'" })
  touid: number;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('int', { name: 'sendtime', unsigned: true, default: () => "'0'" })
  sendtime: number;
}
