import { VehicleFuel } from "src/Modules/Fuel/vehicle-fuel/entities/vehicle-fuel.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VehicleModel } from "../../vehicle-model/entities/vehicle-model.entity";
import { VehicleType } from "../../vehicle-type/entities/vehicle-type.entity";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    chassisNumber: string;

    @Column()
    motorNumber: string;

    @Column()
    plateNumber: string;

    @Column()
    @OneToOne(type => VehicleType, type => type.id)
    idVehicleType: number;

    @Column()
    @OneToOne(type => VehicleModel, model => model.id)
    idVehicleModel: number;

    @Column()
    @OneToOne(type => VehicleFuel, fuel => fuel.id)
    idBrand: number;

    @Column()
    createdAt: Date;

    @Column({ default: true }) 
    state: boolean;
    
}