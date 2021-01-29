import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VehicleBrand } from "../../vehicle-brand/entities/vehicle-brand.entity";

@Entity()
export class VehicleModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @OneToOne(type => VehicleBrand, brand => brand.id)
    idBrand: number;

    @Column()
    name: string;

@Column()    state: boolean;
}