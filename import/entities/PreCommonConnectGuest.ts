import { Column, Entity } from 'typeorm';

@Entity('common_connect_guest')
export class PreCommonConnectGuest {
  @Column('char', { primary: true, name: 'conopenid', length: 32 })
  conopenid: string;

  @Column('char', { name: 'conuin', length: 40 })
  conuin: string;

  @Column('char', { name: 'conuinsecret', length: 16 })
  conuinsecret: string;

  @Column('char', { name: 'conqqnick', length: 100 })
  conqqnick: string;

  @Column('char', { name: 'conuintoken', length: 32 })
  conuintoken: string;
}
