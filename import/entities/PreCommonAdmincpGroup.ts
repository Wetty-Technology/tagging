import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_admincp_group')
export class PreCommonAdmincpGroup {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'cpgroupid',
    unsigned: true,
  })
  cpgroupid: number;

  @Column('varchar', { name: 'cpgroupname', length: 255 })
  cpgroupname: string;
}
