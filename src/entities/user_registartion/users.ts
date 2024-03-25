//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
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
  @Column({ name: 'team_id', nullable: false, type: 'bigint', primary: false })
  team_id: number;
}
