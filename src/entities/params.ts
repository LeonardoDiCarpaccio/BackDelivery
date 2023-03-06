// Param Entity
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { client } from "./client";
import { command } from "./command";

@Entity()
export class params {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sender_id: string;

  @Column()
  token: string;

  @OneToMany(() => command, (command) => command.params)
  @JoinColumn({ name: "sender_id" })
  command: command;

  @ManyToOne(() => client, (client) => client.params)
  @JoinColumn({ name: "client_id" })
  client: client;
}
