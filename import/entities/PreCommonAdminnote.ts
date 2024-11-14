import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_adminnote')
export class PreCommonAdminnote {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'admin', length: 15 })
  admin: string;

  @Column('tinyint', { name: 'access', default: () => "'0'" })
  access: number;

  @Column('tinyint', { name: 'adminid', default: () => "'0'" })
  adminid: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;

  @Column('mediumtext', { name: 'message' })
  message: string;
}
