import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
  Timestamp,
  CreateDateColumn,
} from "typeorm";
import { status } from "./status";
import { user } from "./user";
import { client } from "./client";
import { params } from "./params";

import { shipping_item } from "./shipping_item";

@Entity()
export class command {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ nullable: false, default: 1 })
  statusId: number;

  @Column({ nullable: true })
  conductorId: number;

  @Column({ nullable: false })
  sender_id: number;

  @Column({ nullable: true })
  visit_id: number;

  @Column({ nullable: true, type: "double precision" })
  creationDate: number;
  // @CreateDateColumn({ nullable: true })
  // creationDate: Date;

  @Column({ nullable: true })
  creationDateDisplay: String;

  @Column({ nullable: true, type: "double precision" })
  estimated_time_arrival: number;

  @Column({ nullable: true })
  estimatedDeliveryDateDisplay: String;

  @Column({ nullable: true })
  finishDate: Date;

  @Column({ nullable: true })
  finishDateDisplay: String;

  @Column({ nullable: false })
  address: string;

  //Every command can only have one status at the same time
  @ManyToOne(() => status, (status) => status.id, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: "statusId" })
  status: status;

  //Every command can only have one driver at the same time
  @ManyToOne(() => user, (user) => user.id, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: "conductorId" })
  user: user;

  //Every command can only have one client at the same time (different from the delevery client info we talk about clientshop here)
  @ManyToOne(() => params, (params) => params.sender_id, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: "sender_id" })
  params: params;
  //JoinColum permit to iniate role.id has the column with want has foreign key

  @ManyToMany(() => shipping_item, { cascade: true })
  @JoinTable()
  shipping_items: shipping_item[];
}
