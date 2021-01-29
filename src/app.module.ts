import { BatchModule } from './Modules/Batch/batch.module';
import { InspectionModule } from './Modules/Inspection/inspection.module';
import { VehicleModule } from './Modules/Vehicle/vehicle.module';
import { RentModule } from './Modules/Rent/rent.module';
import { EmployeesModule } from './Modules/Employees/employees.module';
import { ClientsModule } from './Modules/Clients/clients.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'rentacar',
      password: '1234',
      database: 'rent-a-car',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BatchModule,
    InspectionModule,
    VehicleModule,
    RentModule,
    EmployeesModule,
    ClientsModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
