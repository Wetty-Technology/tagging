import { Column, Entity, Index } from 'typeorm';

@Index('idtype', ['idtype', 'status', 'dateline'], {})
@Entity('pre_portal_comment_moderate')
export class PrePortalCommentModerate {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('varchar', { name: 'idtype', length: 15 })
  idtype: string;

  @Column('tinyint', { name: 'status', default: () => "'0'" })
  status: number;

  @Column('int', { name: 'dateline', unsigned: true, default: () => "'0'" })
  dateline: number;
}
