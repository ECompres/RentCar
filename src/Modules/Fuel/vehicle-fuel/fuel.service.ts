import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleFuel } from './entities/vehicle-fuel.entity';

@Injectable()
export class FuelService {

    constructor(
        @InjectRepository(VehicleFuel)
        private readonly vehicleFuelRepository: Repository<VehicleFuel>
    ) { }

    async getAllFuel(): Promise<VehicleFuel[]> {
        return await this.vehicleFuelRepository.find();
    }

    async getFuel(id: number): Promise<VehicleFuel> {
        return await this.vehicleFuelRepository.findOne(id);
    }

    async createFuel(fuel: VehicleFuel): Promise<VehicleFuel> {
        return await this.vehicleFuelRepository.save(fuel);
    }

    async updateFuel(id: number, fuel: VehicleFuel): Promise<VehicleFuel> {
        const oldFuel = await this.vehicleFuelRepository.findOne(id);
        const editedFuel = Object.assign(oldFuel, fuel);
        return await this.vehicleFuelRepository.save(editedFuel);
    }
    
    async deleteFuel(id: number): Promise<any> {
        return await this.vehicleFuelRepository.delete(id);
    }
}
