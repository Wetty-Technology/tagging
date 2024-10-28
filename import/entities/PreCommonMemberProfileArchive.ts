import { Column, Entity } from 'typeorm';

@Entity('pre_common_member_profile_archive')
export class PreCommonMemberProfileArchive {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('varchar', { name: 'realname', length: 255 })
  realname: string;

  @Column('tinyint', { name: 'gender', width: 1, default: () => "'0'" })
  gender: boolean;

  @Column('smallint', {
    name: 'birthyear',
    unsigned: true,
    default: () => "'0'",
  })
  birthyear: number;

  @Column('tinyint', {
    name: 'birthmonth',
    unsigned: true,
    default: () => "'0'",
  })
  birthmonth: number;

  @Column('tinyint', { name: 'birthday', unsigned: true, default: () => "'0'" })
  birthday: number;

  @Column('varchar', { name: 'constellation', length: 255 })
  constellation: string;

  @Column('varchar', { name: 'zodiac', length: 255 })
  zodiac: string;

  @Column('varchar', { name: 'telephone', length: 255 })
  telephone: string;

  @Column('varchar', { name: 'mobile', length: 255 })
  mobile: string;

  @Column('varchar', { name: 'idcardtype', length: 255 })
  idcardtype: string;

  @Column('varchar', { name: 'idcard', length: 255 })
  idcard: string;

  @Column('varchar', { name: 'address', length: 255 })
  address: string;

  @Column('varchar', { name: 'zipcode', length: 255 })
  zipcode: string;

  @Column('varchar', { name: 'nationality', length: 255 })
  nationality: string;

  @Column('varchar', { name: 'birthprovince', length: 255 })
  birthprovince: string;

  @Column('varchar', { name: 'birthcity', length: 255 })
  birthcity: string;

  @Column('varchar', { name: 'resideprovince', length: 255 })
  resideprovince: string;

  @Column('varchar', { name: 'residecity', length: 255 })
  residecity: string;

  @Column('varchar', { name: 'residedist', length: 20 })
  residedist: string;

  @Column('varchar', { name: 'residecommunity', length: 255 })
  residecommunity: string;

  @Column('varchar', { name: 'residesuite', length: 255 })
  residesuite: string;

  @Column('varchar', { name: 'graduateschool', length: 255 })
  graduateschool: string;

  @Column('varchar', { name: 'company', length: 255 })
  company: string;

  @Column('varchar', { name: 'education', length: 255 })
  education: string;

  @Column('varchar', { name: 'occupation', length: 255 })
  occupation: string;

  @Column('varchar', { name: 'position', length: 255 })
  position: string;

  @Column('varchar', { name: 'revenue', length: 255 })
  revenue: string;

  @Column('varchar', { name: 'affectivestatus', length: 255 })
  affectivestatus: string;

  @Column('varchar', { name: 'lookingfor', length: 255 })
  lookingfor: string;

  @Column('varchar', { name: 'bloodtype', length: 255 })
  bloodtype: string;

  @Column('varchar', { name: 'height', length: 255 })
  height: string;

  @Column('varchar', { name: 'weight', length: 255 })
  weight: string;

  @Column('varchar', { name: 'alipay', length: 255 })
  alipay: string;

  @Column('varchar', { name: 'icq', length: 255 })
  icq: string;

  @Column('varchar', { name: 'qq', length: 255 })
  qq: string;

  @Column('varchar', { name: 'yahoo', length: 255 })
  yahoo: string;

  @Column('varchar', { name: 'msn', length: 255 })
  msn: string;

  @Column('varchar', { name: 'taobao', length: 255 })
  taobao: string;

  @Column('varchar', { name: 'site', length: 255 })
  site: string;

  @Column('mediumtext', { name: 'bio' })
  bio: string;

  @Column('mediumtext', { name: 'interest' })
  interest: string;

  @Column('mediumtext', { name: 'field1' })
  field1: string;

  @Column('mediumtext', { name: 'field2' })
  field2: string;

  @Column('mediumtext', { name: 'field3' })
  field3: string;

  @Column('mediumtext', { name: 'field4' })
  field4: string;

  @Column('mediumtext', { name: 'field5' })
  field5: string;

  @Column('mediumtext', { name: 'field6' })
  field6: string;

  @Column('mediumtext', { name: 'field7' })
  field7: string;

  @Column('mediumtext', { name: 'field8' })
  field8: string;

  @Column('varchar', { name: 'birthdist', length: 20 })
  birthdist: string;

  @Column('varchar', { name: 'birthcommunity', length: 255 })
  birthcommunity: string;
}
