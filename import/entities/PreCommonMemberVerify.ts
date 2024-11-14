import { Column, Entity, Index } from 'typeorm';

@Index('verify1', ['verify1'], {})
@Index('verify2', ['verify2'], {})
@Index('verify3', ['verify3'], {})
@Index('verify4', ['verify4'], {})
@Index('verify5', ['verify5'], {})
@Index('verify6', ['verify6'], {})
@Index('verify7', ['verify7'], {})
@Entity('common_member_verify')
export class PreCommonMemberVerify {
  @Column('mediumint', { primary: true, name: 'uid', unsigned: true })
  uid: number;

  @Column('tinyint', { name: 'verify1', width: 1, default: () => "'0'" })
  verify1: boolean;

  @Column('tinyint', { name: 'verify2', width: 1, default: () => "'0'" })
  verify2: boolean;

  @Column('tinyint', { name: 'verify3', width: 1, default: () => "'0'" })
  verify3: boolean;

  @Column('tinyint', { name: 'verify4', width: 1, default: () => "'0'" })
  verify4: boolean;

  @Column('tinyint', { name: 'verify5', width: 1, default: () => "'0'" })
  verify5: boolean;

  @Column('tinyint', { name: 'verify6', width: 1, default: () => "'0'" })
  verify6: boolean;

  @Column('tinyint', { name: 'verify7', width: 1, default: () => "'0'" })
  verify7: boolean;
}
