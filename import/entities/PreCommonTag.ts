import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tagname', ['tagname'], {})
@Index('status', ['status', 'tagid'], {})
@Entity('common_tag')
export class PreCommonTag {
  @PrimaryGeneratedColumn({ type: 'mediumint', name: 'tagid', unsigned: true })
  tagid: number;

  @Column('char', { name: 'tagname', length: 20 })
  tagname: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;
}
