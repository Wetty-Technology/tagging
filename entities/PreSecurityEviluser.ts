import { Column, Entity, Index } from 'typeorm';

@Index('operateresult', ['operateresult', 'createtime'], {})
@Entity('pre_security_eviluser')
export class PreSecurityEviluser {
  @Column('int', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('int', { name: 'evilcount', default: () => "'0'" })
  evilcount: number;

  @Column('mediumint', {
    name: 'eviltype',
    unsigned: true,
    default: () => "'0'",
  })
  eviltype: number;

  @Column('int', { name: 'createtime', unsigned: true, default: () => "'0'" })
  createtime: number;

  @Column('tinyint', { name: 'operateresult', width: 1, default: () => "'0'" })
  operateresult: boolean;

  @Column('tinyint', { name: 'isreported', width: 1, default: () => "'0'" })
  isreported: boolean;
}
