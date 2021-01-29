import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleDto } from './dtos/vehicle.dto';
@Injectable()
export class VehicleService {

    constructor(
        @InjectRepository(Vehicle)
        private readonly vehicleRepository: Repository<Vehicle>
    ) { }

    async getAllVehicles(): Promise<Vehicle[]> {
        return await this.vehicleRepository.find();
    }

    async getVehicle(id: number): Promise<Vehicle> {
        return await this.vehicleRepository.findOne(id);
    }

    async createVehicle(vehicle: VehicleDto): Promise<Vehicle> {
        return await this.vehicleRepository.save(vehicle);
    }

    async updateVehicle(id: number, vehicle: VehicleDto): Promise<Vehicle> {
        const oldVehicle = await this.vehicleRepository.findOne(id);
        const editedVehicle = Object.assign(oldVehicle, vehicle);
        return await this.vehicleRepository.save(editedVehicle);
    }

    async deleteVehicle(id: number): Promise<any> {
        return await this.vehicleRepository.delete(id);
    }
}
