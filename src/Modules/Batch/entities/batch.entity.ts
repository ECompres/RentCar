import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Batch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Description: string;

    @Column() 
    State: boolean;
}