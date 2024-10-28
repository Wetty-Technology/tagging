import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_ucenter_domains')
export class PreUcenterDomains {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('char', { name: 'domain', length: 40 })
  domain: string;

  @Column('varchar', { name: 'ip', length: 45 })
  ip: string;
}
