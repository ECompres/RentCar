import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { timeStamp } from 'console';
import { VehicleFuel } from './entities/vehicle-fuel.entity';
import { FuelService } from './fuel.service';

@Controller('VehicleFuel')
export class FuelController {

    constructor(private vehicleFuelService: FuelService) { }

    @Get()
    async getAllFuel() {
        return await this.vehicleFuelService.getAllFuel();
    }

    @Get(':id')
    async getFuel(@Param('id') id: number) {
        return await this.vehicleFuelService.getFuel(id);
    }

    @Post()
    async createFuel(@Body() fuel: VehicleFuel) {
        return await this.vehicleFuelService.createFuel(fuel);
    }

    @Put(':id')
    async updateFuel(@Param('id') id: number, @Body() fuel: VehicleFuel) {
        return await this.vehicleFuelService.updateFuel(id, fuel);
    }

    @Delete(':id')
    async deleteFuel(@Param(':id') id: number){
        return await this.vehicleFuelService.deleteFuel(id);
    }
}
