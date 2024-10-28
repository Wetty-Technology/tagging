import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('dateline', ['dateline'], {})
@Index('operation_dateline', ['operation', 'dateline'], {})
@Entity('pre_common_card_log')
export class PreCommonCardLog {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id' })
  id: number;

  @Column('mediumint', { name: 'uid', default: () => "'0'" })
  uid: number;

  @Column('varchar', { name: 'username', length: 20 })
  username: string;

  @Column('varchar', { name: 'cardrule', length: 255 })
  cardrule: string;

  @Column('mediumtext', { name: 'info' })
  info: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('longtext', { name: 'description' })
  description: string;

  @Column('tinyint', { name: 'operation', width: 1, default: () => "'0'" })
  operation: boolean;
}
