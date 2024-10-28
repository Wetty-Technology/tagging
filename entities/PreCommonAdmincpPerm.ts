import { Column, Entity, Index } from 'typeorm';

@Index('cpgroupperm', ['cpgroupid', 'perm'], { unique: true })
@Index('cpgroupid', ['cpgroupid'], {})
@Entity('pre_common_admincp_perm')
export class PreCommonAdmincpPerm {
  @Column('smallint', { name: 'cpgroupid', unsigned: true })
  cpgroupid: number;

  @Column('varchar', { name: 'perm', length: 100 })
  perm: string;
}
