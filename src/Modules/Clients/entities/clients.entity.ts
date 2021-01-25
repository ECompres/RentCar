import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientsType } from "./clients-type.entity";

@Entity()
export class Clients {
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
    cellphoneNumber: string;

    @Column()
    creditCardNumber: string;

    @Column()
    creditLimit: number;

    @Column()
    @OneToOne(type => ClientsType, idType => idType.id)
    IdClientType: number;

    @Column() 
    State: boolean;

    @Column()
    createdAt: Date
}