import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aljsv_result')
export class PreAljsvResult {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'user', length: 255 })
  user: string;

  @Column('int', { name: 'datetime' })
  datetime: number;

  @Column('varchar', { name: 'formtitle', length: 255 })
  formtitle: string;

  @Column('int', { name: 'formid' })
  formid: number;

  @Column('int', { name: 'uid' })
  uid: number;

  @Column('varchar', { name: 'answer', length: 255 })
  answer: string;

  @Column('varchar', { name: 'fieldname', length: 255 })
  fieldname: string;

  @Column('int', { name: 'fieldtype' })
  fieldtype: number;
}
