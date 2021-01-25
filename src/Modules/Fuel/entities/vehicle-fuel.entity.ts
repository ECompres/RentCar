import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VehicleFuel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default: true})
    state: boolean;
}