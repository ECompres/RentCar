import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuelQuantityDto } from './dto/fuel-quantity.dto';
import { FuelQuantityService } from './fuel-quantity.service';

@Controller('FuelQuantity')
export class FuelQuantityController {

    constructor(private fuelQuantityService: FuelQuantityService) { }

    @Get()
    async getAllFuelQuantity() {
        return await this.fuelQuantityService.getAllFuelQuantity();
    }

    @Get(':id')
    async getFuelQuantity(@Param('id') id: number) {
        return await this.fuelQuantityService.getFuelQuantity(id);
    }

    @Post()
    async createFuelQuantity(@Body() fuelQuantity: FuelQuantityDto) {
        return await this.fuelQuantityService.createFuelQuantity(fuelQuantity);
    }

    @Put(':id')
    async updateFuelQuantity(@Param('id') id: number, @Body() fuelQuantity: FuelQuantityDto) {
        return await this.fuelQuantityService.updateFuelQuantity(id, fuelQuantity);
    }

    @Delete(':id')
    async deleteFuelQuantity(@Param('id') id: number) {
        return await this.fuelQuantityService.deleteFuelQuantity(id);
    }
}
