import { Column, Entity, Index } from 'typeorm';

@Index('type', ['tid', 'type'], {})
@Index('operateresult', ['operateresult', 'createtime'], {})
@Entity('pre_security_evilpost')
export class PreSecurityEvilpost {
  @Column('int', { primary: true, name: 'pid', unsigned: true })
  pid: number;

  @Column('int', { name: 'tid', unsigned: true, default: () => "'0'" })
  tid: number;

  @Column('tinyint', { name: 'type', width: 1, default: () => "'0'" })
  type: boolean;

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

  @Column('char', { name: 'censorword', length: 50 })
  censorword: string;
}
