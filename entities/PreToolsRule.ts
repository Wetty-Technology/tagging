import { Column, Entity } from 'typeorm';

@Entity('pre_tools_rule')
export class PreToolsRule {
  @Column('char', { primary: true, name: 'name', length: 50 })
  name: string;

  @Column('char', { name: 'rule', length: 255 })
  rule: string;

  @Column('mediumtext', { name: 'comment' })
  comment: string;
}
