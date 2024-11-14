import { Column, Entity } from 'typeorm';

@Entity('forum_moderator')
export class PreForumModerator {
  @Column('mediumint', {
    primary: true,
    name: 'uid',
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column('mediumint', {
    primary: true,
    name: 'fid',
    unsigned: true,
    default: () => "'0'",
  })
  fid: number;

  @Column('tinyint', { name: 'displayorder', default: () => "'0'" })
  displayorder: number;

  @Column('tinyint', { name: 'inherited', width: 1, default: () => "'0'" })
  inherited: boolean;
}
