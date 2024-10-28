import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_ucenter_memberlogs')
export class PreUcenterMemberlogs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'lid', unsigned: true })
  lid: number;

  @Column('mediumint', { name: 'uid', unsigned: true })
  uid: number;

  @Column('varchar', { name: 'action', length: 32 })
  action: string;

  @Column('varchar', { name: 'extra', length: 255 })
  extra: string;
}
