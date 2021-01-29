import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesDto } from './dtos/employees.dto';
import { EmployeesService } from './employees.service';

@Controller('Employees')
export class EmployeesController {

    constructor(private employeeService: EmployeesService) { }

    @Get()
    async getAllEmployee() {
        return await this.employeeService.getAll();
    }

    @Get(':id')
    async getEmployee(@Param('id') id: number) {
        return await this.employeeService.getOne(id);
    }

    @Post()
    async createEmployee(@Body() employee: EmployeesDto) {
        return await this.employeeService.createEmployee(employee);
    }

    @Put(':id')
    async updateEmployee(@Param('id') id: number, @Body() employee: EmployeesDto) {
        return await this.employeeService.updateEmployee(id, employee);
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: number) {
        return await this.employeeService.deleteEmployee(id);
    }

}