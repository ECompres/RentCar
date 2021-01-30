import { Clients } from "src/Modules/Clients/client/entities/clients.entity";
import { Employees } from "src/Modules/Employees/Employee/entities/employees.entity";
import { Vehicle } from "src/Modules/Vehicle/vehicle/entities/vehicle.entity";
import { Inspection } from "src/Modules/Inspection/entities/inspection.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @OneToOne(type => Employees, idEmployee => idEmployee.id)
    idEmployee: number;

    @Column()
    @OneToOne(type => Vehicle, idVehicle => idVehicle.id)
    idVehicle: number;

    @Column()
    @OneToOne(type => Clients, idClient => idClient.id)
    idClient: number;

    @Column()
    @OneToOne(type => Inspection, idInspection => idInspection.id)
    idInspection: number;

    @Column()
    createdAt: Date;

    @Column()
    rentalDate: Date;

    @Column()
    returnDate: Date;

    @Column()
    numberOfDays: number;

    @Column()
    amountDays: number;

    @Column()
    description: string;

    @Column() 
    state: boolean;

    @Column()
    code: string;
}