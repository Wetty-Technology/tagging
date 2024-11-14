import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('iprange', ['lowerip', 'upperip'], {})
@Entity('common_banned')
export class PreCommonBanned {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'ip', length: 49 })
  ip: string;

  @Column('varbinary', { name: 'lowerip', length: 16, default: () => "'0x'" })
  lowerip: Buffer;

  @Column('varbinary', { name: 'upperip', length: 16, default: () => "'0x'" })
  upperip: Buffer;

  @Column('smallint', { name: 'ip1', default: () => "'0'" })
  ip1: number;

  @Column('smallint', { name: 'ip2', default: () => "'0'" })
  ip2: number;

  @Column('smallint', { name: 'ip3', default: () => "'0'" })
  ip3: number;

  @Column('smallint', { name: 'ip4', default: () => "'0'" })
  ip4: number;

  @Column('varchar', { name: 'admin', length: 15 })
  admin: string;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;
}
