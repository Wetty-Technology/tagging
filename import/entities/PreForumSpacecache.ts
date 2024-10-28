import { Column, Entity } from 'typeorm';

@Entity('pre_forum_spacecache')
export class PreForumSpacecache {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('varchar', { primary: true, name: 'variable', length: 20 })
  variable: string;

  @Column('mediumtext', { name: 'value' })
  value: string;

  @Column('int', { name: 'expiration', unsigned: true, default: () => "'0'" })
  expiration: number;
}
