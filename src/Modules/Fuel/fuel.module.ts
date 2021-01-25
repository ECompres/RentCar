import { FuelController } from './fuel.controller';
import { FuelService } from './fuel.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        FuelController,],
    providers: [
        FuelService,],
})
export class FuelModule { }
