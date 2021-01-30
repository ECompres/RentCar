import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VehicleDto } from './dtos/vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('Vehicle')
export class VehicleController {
    constructor(private vehicleService: VehicleService) { }

    @Get()
    async getAllVehicles() {
        return await this.vehicleService.getAllVehicles();
    }

    @Get(':id')
    async getVehicle(@Param('id') id: number) {
        return await this.vehicleService.getVehicle(id);
    }

    @Post()
    async createVehicle(@Body() vehicle: VehicleDto) {
        return await this.vehicleService.createVehicle(vehicle);
    }

    @Put(':id')
    async updateVehicle(@Param('id') id: number, vehicle: VehicleDto) {
        return await this.vehicleService.updateVehicle(id, vehicle);
    }

    @Delete(':id')
    async deleteVehicle(@Param('id') id: number){
        return await this.vehicleService.deleteVehicle(id);
    }
}
