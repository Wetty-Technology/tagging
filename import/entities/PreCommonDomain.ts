import { Column, Entity, Index } from 'typeorm';

@Index('domain', ['domain', 'domainroot'], {})
@Index('idtype', ['idtype'], {})
@Entity('pre_common_domain')
export class PreCommonDomain {
  @Column('char', { name: 'domain', length: 30 })
  domain: string;

  @Column('char', { name: 'domainroot', length: 60 })
  domainroot: string;

  @Column('mediumint', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('char', { primary: true, name: 'idtype', length: 15 })
  idtype: string;
}
