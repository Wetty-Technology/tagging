import { Column, Entity } from 'typeorm';

@Entity('nds_votekick')
export class PreNdsVotekick {
  @Column('mediumint', { primary: true, name: 'tid', unsigned: true })
  tid: number;

  @Column('int', { name: 'votes', unsigned: true, default: () => "'0'" })
  votes: number;

  @Column('char', { name: 'uids', length: 80 })
  uids: string;
}
