import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aljsv_field')
export class PreAljsvField {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'formid' })
  formid: number;

  @Column('varchar', { name: 'displayorder', length: 10 })
  displayorder: string;

  @Column('varchar', { name: 'display', length: 1 })
  display: string;

  @Column('varchar', { name: 'fieldname', length: 255 })
  fieldname: string;

  @Column('varchar', { name: 'fieldtitle', length: 255 })
  fieldtitle: string;

  @Column('varchar', { name: 'fieldtype', length: 3 })
  fieldtype: string;

  @Column('longtext', { name: 'fieldpar' })
  fieldpar: string;

  @Column('varchar', { name: 'fieldremark', length: 255 })
  fieldremark: string;

  @Column('int', { name: 'dateline' })
  dateline: number;

  @Column('varchar', { name: 'chart', length: 255 })
  chart: string;
}
