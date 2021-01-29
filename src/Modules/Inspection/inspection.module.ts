import { InspectionController } from './inspection.controller';
import { InspectionService } from './inspection.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inspection } from './entities/inspection.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Inspection
        ])
    ],
    controllers: [
        InspectionController,],
    providers: [
        InspectionService,],
})
export class InspectionModule { }
