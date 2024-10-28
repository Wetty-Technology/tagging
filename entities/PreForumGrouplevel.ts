import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('creditsrange', ['creditshigher', 'creditslower'], {})
@Entity('pre_forum_grouplevel')
export class PreForumGrouplevel {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'levelid', unsigned: true })
  levelid: number;

  @Column('enum', {
    name: 'type',
    enum: ['special', 'default'],
    default: () => "'default'",
  })
  type: 'special' | 'default';

  @Column('varchar', { name: 'leveltitle', length: 255 })
  leveltitle: string;

  @Column('int', { name: 'creditshigher', default: () => "'0'" })
  creditshigher: number;

  @Column('int', { name: 'creditslower', default: () => "'0'" })
  creditslower: number;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('mediumtext', { name: 'creditspolicy' })
  creditspolicy: string;

  @Column('mediumtext', { name: 'postpolicy' })
  postpolicy: string;

  @Column('mediumtext', { name: 'specialswitch' })
  specialswitch: string;
}
