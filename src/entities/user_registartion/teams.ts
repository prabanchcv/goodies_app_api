//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('teams')
export class teams {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
}
