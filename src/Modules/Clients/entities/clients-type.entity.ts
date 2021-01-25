import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientsType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}