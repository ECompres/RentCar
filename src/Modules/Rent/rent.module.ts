import { RentController } from './rent.controller';
import { Module } from '@nestjs/common';
import { RentService } from './rent.service';

@Module({
    imports: [],
    controllers: [
        RentController,],
    providers: [
        RentService
    ],
})
export class RentModule { }
