import { ClientsController } from './client/clients.controller';
import { ClientsService } from './client/clients.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './client/entities/clients.entity';
import { ClientsType } from './clientType/entities/clients-type.entity';
import { ClientsTypeService } from './clientType/clients-type.service';
import { ClientsTypeController } from './clientType/clients-type.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Clients,
            ClientsType
        ])
    ],
    controllers: [
        ClientsController,
        ClientsTypeController
    ],
    providers: [
        ClientsService,
        ClientsTypeService
    ],
})
export class ClientsModule { }
