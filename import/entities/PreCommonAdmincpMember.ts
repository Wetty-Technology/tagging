import { Column, Entity, Index } from 'typeorm';

@Index('uid', ['uid'], {})
@Entity('common_admincp_member')
export class PreCommonAdmincpMember {
  @Column('int', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('int', { name: 'cpgroupid', unsigned: true })
  cpgroupid: number;

  @Column('mediumtext', { name: 'customperm' })
  customperm: string;
}
