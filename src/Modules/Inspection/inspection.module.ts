import { InspectionController } from './inspection.controller';
import { InspectionService } from './inspection.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        InspectionController,],
    providers: [
        InspectionService,],
})
export class InspectionModule { }
