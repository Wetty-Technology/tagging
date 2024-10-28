import { Column, Entity, Index } from 'typeorm';

@Index('expiry', ['expiry'], {})
@Entity('pre_common_process')
export class PreCommonProcess {
  @Column('char', { primary: true, name: 'processid', length: 32 })
  processid: string;

  @Column('int', { name: 'expiry', nullable: true })
  expiry: number | null;

  @Column('int', { name: 'extra', nullable: true })
  extra: number | null;
}
