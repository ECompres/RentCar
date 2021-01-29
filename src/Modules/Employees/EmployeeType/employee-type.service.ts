import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeTypeDto } from './dtos/employees-type.dto';
import { EmployeesType } from './entities/employees-type.entity';

@Injectable()
export class EmployeeTypeService {

    constructor(
        @InjectRepository(EmployeesType)
        private readonly employeesRepository: Repository<EmployeesType>
    ) { }

    async getAllEmployeeType(): Promise<EmployeesType[]> {
        return await this.employeesRepository.find();
    }

    async createEmployeeType(employeeType: EmployeeTypeDto): Promise<EmployeesType> {
        return await this.employeesRepository.save(employeeType);
    }

    async updateEmployeeType(id: number, employeeType: EmployeeTypeDto): Promise<EmployeesType> {
        const oldEmployeeType = await this.employeesRepository.findOne(id);
        const editedEmployeeType = Object.assign(oldEmployeeType, employeeType);
        return await this.employeesRepository.save(editedEmployeeType);
    }

    async deleteEmployeeType(id: number): Promise<any> { 
        return await this.employeesRepository.delete(id);
    }
}
