import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuelQuantity } from './entities/fuel-quantity.entity';

@Injectable()
export class FuelQuantityService {

    constructor(
        @InjectRepository(FuelQuantity)
        private readonly fuelQuantityRepository: Repository<FuelQuantity>
    ) { }

    async getAllFuelQuantity(): Promise<FuelQuantity[]> { 
        return await this.fuelQuantityRepository.find();
    }
}
