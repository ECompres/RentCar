import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleBrand } from './entities/vehicle-brand.entity';
import { VehicleBrandDto } from './dtos/vehicle-brand.dto';

@Injectable()
export class VehicleBrandService {
    constructor(
        @InjectRepository(VehicleBrand)
        private readonly vehicleRepository: Repository<VehicleBrand>
    ) { }

    async getAllVehicleBrand(): Promise<VehicleBrand[]> {
        return await this.vehicleRepository.find();
    }

    async getVehicleBrand(id: number): Promise<VehicleBrand> {
        return await this.vehicleRepository.findOne(id);
    }

    async createVehicleBrand(vehicleBrand: VehicleBrandDto): Promise<VehicleBrand> {
        return await this.vehicleRepository.save(vehicleBrand);
    }

    async updateVehicleBrand(id: number, vehicleBrand: VehicleBrandDto): Promise<VehicleBrand> {
        const oldVehicleBrand = await this.vehicleRepository.findOne(id);
        const editedVehicle = Object.assign(oldVehicleBrand, vehicleBrand);
        return await this.vehicleRepository.save(editedVehicle);
    }

    async deleteVehicleBrand(id: number): Promise<any> { 
        return await this.vehicleRepository.delete(id);
    }
}
