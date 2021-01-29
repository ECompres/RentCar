import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './Employee/employees.controller';
import { EmployeesService } from './Employee/employees.service';
import { EmployeesType } from './EmployeeType/entities/employees-type.entity';
import { Employees } from './Employee/entities/employees.entity';
import { EmployeeTypeController } from './EmployeeType/employee-type.controller';
import { EmployeeTypeService } from './EmployeeType/employee-type.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmployeesType,
            Employees
        ])
    ],
    controllers: [
        EmployeesController,
        EmployeeTypeController
    ],
    providers: [
        EmployeesService,
        EmployeeTypeService
    ],
})
export class EmployeesModule { }
