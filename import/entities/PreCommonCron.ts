import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('nextrun', ['available', 'nextrun'], {})
@Entity('common_cron')
export class PreCommonCron {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'cronid', unsigned: true })
  cronid: number;

  @Column('tinyint', { name: 'available', width: 1, default: () => "'0'" })
  available: boolean;

  @Column('enum', {
    name: 'type',
    enum: ['user', 'system', 'plugin'],
    default: () => "'user'",
  })
  type: 'user' | 'system' | 'plugin';

  @Column('char', { name: 'name', length: 50 })
  name: string;

  @Column('char', { name: 'filename', length: 50 })
  filename: string;

  @Column('int', { name: 'lastrun', unsigned: true, default: () => "'0'" })
  lastrun: number;

  @Column('int', { name: 'nextrun', unsigned: true, default: () => "'0'" })
  nextrun: number;

  @Column('tinyint', { name: 'weekday', width: 1, default: () => "'0'" })
  weekday: boolean;

  @Column('tinyint', { name: 'day', default: () => "'0'" })
  day: number;

  @Column('tinyint', { name: 'hour', default: () => "'0'" })
  hour: number;

  @Column('char', { name: 'minute', length: 36 })
  minute: string;
}
