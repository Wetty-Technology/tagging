import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_access_token', ['userAccessToken', 'userAccessSecret'], {
  unique: true,
})
@Index('user_id', ['userId'], { unique: true })
@Entity('home_access')
export class PreHomeAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_access_id' })
  userAccessId: number;

  @Column('varchar', { name: 'user_access_token', nullable: true, length: 36 })
  userAccessToken: string | null;

  @Column('varchar', { name: 'user_access_secret', nullable: true, length: 36 })
  userAccessSecret: string | null;

  @Column('int', { name: 'user_id', nullable: true, unique: true })
  userId: number | null;

  @Column('datetime', { name: 'create_time', nullable: true })
  createTime: Date | null;
}
