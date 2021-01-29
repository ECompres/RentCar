import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from './entities/employees.entity';
import { EmployeesDto } from './dtos/employees.dto';

@Injectable()
export class EmployeesService {

    constructor(
        @InjectRepository(Employees)
        private readonly employeeRepository: Repository<Employees>
    ) { }

    async getAll(): Promise<Employees[]> {
        return await this.employeeRepository.find();
    }

    async getOne(id: number): Promise<Employees> {
        return await this.employeeRepository.findOne(id);
    }

    async createEmployee(employee: EmployeesDto): Promise<Employees> {
        return await this.employeeRepository.save(employee);
    }

    async updateEmployee(id: number, employee: EmployeesDto): Promise<Employees> { 
        const oldEmployee = await this.employeeRepository.findOne(id);
        const editedEmployee = Object.assign(oldEmployee, employee);
        return await this.employeeRepository.save(editedEmployee);
    }

    async deleteEmployee(id: number) : Promise<any> {
        return await this.employeeRepository.delete(id);
    }
}
