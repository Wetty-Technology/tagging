import { Column, Entity } from 'typeorm';

@Entity('forum_relatedthread')
export class PreForumRelatedthread {
  @Column('int', {
    primary: true,
    name: 'tid',
    unsigned: true,
    default: () => "'0'",
  })
  tid: number;

  @Column('enum', {
    primary: true,
    name: 'type',
    enum: ['general', 'trade'],
    default: () => "'general'",
  })
  type: 'general' | 'trade';

  @Column('int', { name: 'expiration', default: () => "'0'" })
  expiration: number;

  @Column('varchar', { name: 'keywords', length: 255 })
  keywords: string;

  @Column('mediumtext', { name: 'relatedthreads' })
  relatedthreads: string;
}
