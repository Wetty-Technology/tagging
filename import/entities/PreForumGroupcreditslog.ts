import { Column, Entity } from 'typeorm';

@Entity('forum_groupcreditslog')
export class PreForumGroupcreditslog {
  @Column('mediumint', { primary: true, name: 'fid', unsigned: true })
  fid: number;

  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('int', { primary: true, name: 'logdate', default: () => "'0'" })
  logdate: number;
}
