//append_imports_start

import {
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Entity,
  Column,
} from 'typeorm'; //_splitter_
import { teams } from './teams'; //_splitter_
//append_imports_end
@Entity('users')
export class users {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({ name: 'phone_no', nullable: false, type: 'text', primary: false })
  phone_no: string;
  @Column({
    name: 'status',
    nullable: false,
    type: 'boolean',
    default: false,
    primary: false,
  })
  status: boolean;
  @Column({ name: 'image', nullable: false, type: 'text', primary: false })
  image: string;
  @OneToOne(() => teams, (teams) => teams.id, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'team_id', referencedColumnName: 'id' })
  team_id;
}
