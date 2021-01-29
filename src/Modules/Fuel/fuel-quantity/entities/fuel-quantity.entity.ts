import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FuelQuantity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}