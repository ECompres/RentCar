export class RentDto {   
   id: number;
   idEmployee: number;
   idVehicle: number;
   idClient: number;
   idInspection: number;
   createdAt: Date;
   rentalDate: Date;
   returnDate: Date;
   numberOfDays: number;
   amountDays: number;
   description: string;
   state: boolean;
   code: string;
}