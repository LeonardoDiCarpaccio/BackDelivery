import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { role } from "./role";

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  roleId: string;

  // @ManyToMany(() => role, { nullable: false })
  // @JoinTable()
  // role: role[];

  //Every command can only have one driver at the same time
  @ManyToOne(() => role, (role) => role.id, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: "roleId" })
  role: role;
}
