import { type } from "os";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { command } from "./command";

@Entity()
export class shipping_item {
  @PrimaryColumn({ type: "varchar" })
  id: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  dimensions: String;
}
