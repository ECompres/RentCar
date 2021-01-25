import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeesType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}