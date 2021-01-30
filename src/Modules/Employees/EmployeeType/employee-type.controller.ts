import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeTypeDto } from './dtos/employees-type.dto';
import { EmployeeTypeService } from './employee-type.service';

@Controller('EmployeeType')
export class EmployeeTypeController {

    constructor(private employeeTypeService: EmployeeTypeService) { }

    @Get()
    async getAllEmployeeType() {
        return await this.employeeTypeService.getAllEmployeeType();
    }

    @Get(':id')
    async getEmployeeType(@Param('id') id: number) {
        return await this.employeeTypeService.getEmployeeType(id);
    }
    
    @Post()
    async createEmployeeType(@Body() employeeType: EmployeeTypeDto) {
        return await this.employeeTypeService.createEmployeeType(employeeType);
    }

    @Put(':id')
    async updateEmployeeType(@Param('id') id: number, @Body() employeeType: EmployeeTypeDto) {
        return await this.employeeTypeService.updateEmployeeType(id, employeeType);
    }

    @Delete(':id')
    async deleteEmployeeType(@Param('id') id: number) {
        return await this.employeeTypeService.deleteEmployeeType(id);
    }
}
