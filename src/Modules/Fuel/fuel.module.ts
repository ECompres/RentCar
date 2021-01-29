import { FuelController } from './vehicle-fuel/fuel.controller';
import { FuelService } from './vehicle-fuel/fuel.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelQuantity } from './fuel-quantity/entities/fuel-quantity.entity';
import { VehicleFuel } from './vehicle-fuel/entities/vehicle-fuel.entity';
import { FuelQuantityService } from './fuel-quantity/fuel-quantity.service';
import { FuelQuantityController } from './fuel-quantity/fuel-quantity.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            FuelQuantity,
            VehicleFuel
        ])
    ],
    controllers: [
        FuelController,
        FuelQuantityController
    ],
    providers: [
        FuelService,
        FuelQuantityService
    ],
})
export class FuelModule { }
