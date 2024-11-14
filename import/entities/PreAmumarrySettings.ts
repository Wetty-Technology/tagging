import { Column, Entity } from 'typeorm';

@Entity('amumarry_settings')
export class PreAmumarrySettings {
  @Column('mediumint', { name: 'uid' })
  uid: number;

  @Column('mediumint', { name: 'touid' })
  touid: number;

  @Column('mediumint', { name: 'r' })
  r: number;

  @Column('longtext', { name: 'chaseway', nullable: true })
  chaseway: string | null;

  @Column('mediumint', { name: 'feeling' })
  feeling: number;

  @Column('int', { name: 'time' })
  time: number;

  @Column('int', { name: 'marrytime' })
  marrytime: number;

  @Column('longtext', { name: 'woo', nullable: true })
  woo: string | null;
}
