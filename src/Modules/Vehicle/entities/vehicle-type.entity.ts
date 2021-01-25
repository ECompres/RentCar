import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VehicleType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

@Column()    state: boolean;
}