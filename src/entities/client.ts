import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { params } from "./params";
import { role } from "./role";

@Entity()
export class client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: false })
  orga: string;

  @Column({ nullable: true })
  adress: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  accountValue: string;

  @ManyToMany(() => params, { cascade: true })
  @JoinTable()
  params: params[];

  @ManyToMany(() => role, { cascade: true })
  @JoinTable()
  role: role[];
}
