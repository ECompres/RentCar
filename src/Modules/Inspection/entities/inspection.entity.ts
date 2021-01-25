import { FuelQuantity } from "src/Modules/Fuel/entities/fuel-quantity.entity";
import { VehicleFuel } from "src/Modules/Fuel/entities/vehicle-fuel.entity";
import { Vehicle } from "src/Modules/Vehicle/entities/vehicle.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inspection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    @OneToOne(type => Vehicle, idVehicle => idVehicle.id)
    idVehicle: number;

@Column()    hasScratch: boolean;

    @Column()
    @OneToOne(type => FuelQuantity, idFuel => idFuel.id)
    idFuelQuantity: number;
    
@Column()    hydraulicJack: boolean;
  
@Column()    brokenGlass: boolean;

@Column()    rigthTire1: boolean;

@Column()    rigthTire2: boolean;

@Column()    leftTire1: boolean;

@Column()    leftTire2: boolean;

@Column()    sparteTire: boolean;

    @Column()
    createdAt: Date;
}