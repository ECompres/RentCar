import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VehicleBrandDto } from './dtos/vehicle-brand.dto';
import { VehicleBrandService } from './vehicle-brand.service';

@Controller('VehicleBrand')
export class VehicleBrandController {

    constructor(private vehicleBrandService: VehicleBrandService) { }

    @Get()
    async getAllVehicleBrand() {
        return await this.vehicleBrandService.getAllVehicleBrand();
    }

    @Get(':id')
    async getVehicleBrand(@Param('id') id: number) {
        return await this.vehicleBrandService.getVehicleBrand(id);
    }

    @Post()
    async createVehicleBrand(@Body() vehicleBrand: VehicleBrandDto) {
        return await this.vehicleBrandService.createVehicleBrand(vehicleBrand);
    }

    @Put(':id')
    async updateVehicleBrand(@Param('id') id: number, @Body() vehicleBrand: VehicleBrandDto) {
        return await this.vehicleBrandService.updateVehicleBrand(id, vehicleBrand);
    }

    @Delete(':id')
    async deleteVehicleBrand(@Param('id') id) { 
        return await this.vehicleBrandService.deleteVehicleBrand(id);
    }

}
