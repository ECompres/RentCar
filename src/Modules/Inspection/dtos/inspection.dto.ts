export class InspectionDto {
    id?: number;
    code: string;
    idVehicle: number;
    hasScratch: boolean;
    idFuelQuantity: number;
    hydraulicJack: boolean;
    brokenGlass: boolean;
    rigthTire1: boolean;
    rigthTire2: boolean;
    leftTire1: boolean;
    leftTire2: boolean;
    sparteTire: boolean;
    createdAt: Date;
}