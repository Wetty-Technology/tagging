import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('classid', ['classid'], {})
@Entity('forum_typeoption')
export class PreForumTypeoption {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'optionid',
    unsigned: true,
  })
  optionid: number;

  @Column('smallint', { name: 'classid', unsigned: true, default: () => "'0'" })
  classid: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('tinyint', { name: 'expiration', width: 1 })
  expiration: boolean;

  @Column('varchar', { name: 'protect', length: 255 })
  protect: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('varchar', { name: 'identifier', length: 255 })
  identifier: string;

  @Column('varchar', { name: 'type', length: 255 })
  type: string;

  @Column('varchar', { name: 'unit', length: 255 })
  unit: string;

  @Column('longtext', { name: 'rules' })
  rules: string;

  @Column('mediumtext', { name: 'permprompt' })
  permprompt: string;
}
