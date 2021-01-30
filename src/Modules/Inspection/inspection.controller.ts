import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { timeStamp } from 'console';
import { InspectionDto } from './dtos/inspection.dto';
import { InspectionService } from './inspection.service';

@Controller('Inspection')
export class InspectionController {

    constructor(private inspectionService: InspectionService) { }

    @Get()
    async getAllInspection() {
        return await this.inspectionService.getAllInspection();
    }

    @Get(':id')
    async getInspection(@Param('id') id: number) {
        return await this.inspectionService.getInspection(id);
    }

    @Post()
    async createInspection(@Body() inspection: InspectionDto) {
        return await this.inspectionService.createInspection(inspection);
    }

    @Put(':id')
    async updateInspection(@Param('id') id: number, @Body() inspection: InspectionDto) {
        return await this.inspectionService.updateInspection(id, inspection);
    }

    @Delete(':id')
    async deleteInspection(@Param('id') id: number){
        return await this.inspectionService.deleteInspection(id);
    }
}
