import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuelQuantity } from './entities/fuel-quantity.entity';
import { FuelQuantityDto } from './dto/fuel-quantity.dto';

@Injectable()
export class FuelQuantityService {

    constructor(
        @InjectRepository(FuelQuantity)
        private readonly fuelQuantityRepository: Repository<FuelQuantity>
    ) { }

    async getAllFuelQuantity(): Promise<FuelQuantity[]> {
        return await this.fuelQuantityRepository.find();
    }

    async getFuelQuantity(id: number): Promise<FuelQuantity> {
        return await this.fuelQuantityRepository.findOne(id);
    }

    async createFuelQuantity(fuelQuantity: FuelQuantityDto): Promise<FuelQuantity> {
        return await this.fuelQuantityRepository.save(fuelQuantity);
    }

    async updateFuelQuantity(id: number, fuelQuantity: FuelQuantityDto): Promise<FuelQuantity> {
        const oldFuelQuantity = await this.fuelQuantityRepository.findOne(id);
        const editedFuelQuantity = Object.assign(oldFuelQuantity, fuelQuantity);
        return await this.fuelQuantityRepository.save(editedFuelQuantity);
    }

    async deleteFuelQuantity(id: number): Promise<any> { 
        return await this.fuelQuantityRepository.delete(id);
    }
}
