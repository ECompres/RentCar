import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { timeStamp } from 'console';
import { RentDto } from './dtos/rent.dto';
import { RentService } from './rent.service';

@Controller()
export class RentController {

    constructor(private rentService: RentService) { }

    @Get()
    async getAllRent() {
        return await this.rentService.getAllRents();
    }

    @Get(':id')
    async getRent(@Param('id') id: number) {
        return await this.rentService.getRent(id);
    }

    @Post()
    async createRent(@Body() rent: RentDto) {
        return await this.rentService.createRent(rent);
    }

    @Put(':id')
    async updateRent(@Param('id') id: number, @Body() rent: RentDto) {
        return await this.rentService.updateRent(id, rent)
    }

    @Delete(':id')
    async deleteRent(@Param('id') id: number){
        return await this.rentService.deleteRent(id);
    }

}
