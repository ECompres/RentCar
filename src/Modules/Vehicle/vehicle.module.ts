import { VehicleController } from './vehicle/vehicle.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleBrand } from './vehicle-brand/entities/vehicle-brand.entity';
import { VehicleModel } from './vehicle-model/entities/vehicle-model.entity';
import { VehicleType } from './vehicle-type/entities/vehicle-type.entity';
import { Vehicle } from './vehicle/entities/vehicle.entity';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleBrandController } from './vehicle-brand/vehicle-brand.controller';
import { VehicleModelController } from './vehicle-model/vehicle-model.controller';
import { VehicleTypeController } from './vehicle-type/vehicle-type.controller';
import { VehicleBrandService } from './vehicle-brand/vehicle-brand.service';
import { VehicleModelService } from './vehicle-model/vehicle-model.service';
import { VehicleTypeService } from './vehicle-type/vehicle-type.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            VehicleBrand,
            VehicleModel,
            VehicleType,
            Vehicle
        ])
    ],
    controllers: [
        VehicleController, 
        VehicleBrandController,
        VehicleModelController,
        VehicleTypeController,
    ],
    providers: [
        VehicleService,
        VehicleBrandService,
        VehicleModelService,
        VehicleTypeService,
    ],
})
export class VehicleModule { }
