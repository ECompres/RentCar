import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ClientsController,
    ],
    providers: [
        ClientsService,
    ],
})
export class ClientsModule { }
