import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uid', ['uid'], {})
@Index('displayorder', ['displayorder'], {})
@Entity('common_admincp_cmenu')
export class PreCommonAdmincpCmenu {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'url', length: 255 })
  url: string;

  @Column('tinyint', { name: 'sort', width: 1, default: () => "'0'" })
  sort: boolean;

  @Column('tinyint', { name: 'displayorder' })
  displayorder: number;

  @Column('smallint', { name: 'clicks', unsigned: true, default: () => "'1'" })
  clicks: number;

  @Column('mediumint', { name: 'uid', unsigned: true })
  uid: number;

  @Column('int', { name: 'dateline', unsigned: true })
  dateline: number;
}
