import { Batch } from "src/Modules/Batch/entities/batch.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeesType } from "./employees-type.entity";

@Entity()
export class Employees {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    names: string;

    @Column()
    lastNames: string;

    @Column()
    idNumber: string;

    @Column()
    email: string;

    @Column()
    @OneToOne(type => Batch, idBatch => idBatch.id)
    idBatch: number;

    @Column()
    admissionDate: Date;

    @Column()
    createdAt: Date;

    @Column() 
    State: boolean;

    @Column()
    password: string;

    @Column()
    @OneToOne(type => EmployeesType, idEmployee => idEmployee.id)
    idEmployeeType: number;
}