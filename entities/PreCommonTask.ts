import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pre_common_task')
export class PreCommonTask {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'taskid', unsigned: true })
  taskid: number;

  @Column('smallint', {
    name: 'relatedtaskid',
    unsigned: true,
    default: () => "'0'",
  })
  relatedtaskid: number;

  @Column('smallint', {
    name: 'exclusivetaskid',
    unsigned: true,
    default: () => "'0'",
  })
  exclusivetaskid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('mediumtext', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'icon', length: 150 })
  icon: string;

  @Column('int', { name: 'applicants', unsigned: true, default: () => "'0'" })
  applicants: number;

  @Column('int', { name: 'achievers', unsigned: true, default: () => "'0'" })
  achievers: number;

  @Column('mediumint', {
    name: 'tasklimits',
    unsigned: true,
    default: () => "'0'",
  })
  tasklimits: number;

  @Column('mediumtext', { name: 'applyperm' })
  applyperm: string;

  @Column('varchar', { name: 'scriptname', length: 50 })
  scriptname: string;

  @Column('int', { name: 'starttime', unsigned: true, default: () => "'0'" })
  starttime: number;

  @Column('int', { name: 'endtime', unsigned: true, default: () => "'0'" })
  endtime: number;

  @Column('int', { name: 'period', unsigned: true, default: () => "'0'" })
  period: number;

  @Column('tinyint', { name: 'periodtype', width: 1, default: () => "'0'" })
  periodtype: boolean;

  @Column('enum', {
    name: 'reward',
    enum: ['credit', 'magic', 'medal', 'invite', 'group'],
    default: () => "'credit'",
  })
  reward: 'credit' | 'magic' | 'medal' | 'invite' | 'group';

  @Column('varchar', { name: 'prize', length: 15 })
  prize: string;

  @Column('int', { name: 'bonus', default: () => "'0'" })
  bonus: number;

  @Column('smallint', {
    name: 'displayorder',
    unsigned: true,
    default: () => "'0'",
  })
  displayorder: number;

  @Column('varchar', { name: 'version', length: 15 })
  version: string;
}
