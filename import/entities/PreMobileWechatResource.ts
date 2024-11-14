import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('type', ['type'], {})
@Entity('mobile_wechat_resource')
export class PreMobileWechatResource {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

  @Column('mediumtext', { name: 'data' })
  data: string;
}
