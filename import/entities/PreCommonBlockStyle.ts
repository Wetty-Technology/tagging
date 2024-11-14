import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('hash', ['hash'], {})
@Index('blockclass', ['blockclass'], {})
@Entity('common_block_style')
export class PreCommonBlockStyle {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'styleid', unsigned: true })
  styleid: number;

  @Column('varchar', { name: 'blockclass', length: 255 })
  blockclass: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('mediumtext', { name: 'template' })
  template: string;

  @Column('varchar', { name: 'hash', length: 255 })
  hash: string;

  @Column('tinyint', { name: 'getpic', width: 1, default: () => "'0'" })
  getpic: boolean;

  @Column('tinyint', { name: 'getsummary', width: 1, default: () => "'0'" })
  getsummary: boolean;

  @Column('tinyint', { name: 'makethumb', width: 1, default: () => "'0'" })
  makethumb: boolean;

  @Column('tinyint', { name: 'settarget', width: 1, default: () => "'0'" })
  settarget: boolean;

  @Column('mediumtext', { name: 'fields' })
  fields: string;

  @Column('tinyint', { name: 'moreurl', width: 1, default: () => "'0'" })
  moreurl: boolean;
}
