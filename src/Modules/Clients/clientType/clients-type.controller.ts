import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ClientsTypeService } from './clients-type.service';
import { ClientsTypeDto } from './dto/clients-type.dto';

@Controller('ClientsType')
export class ClientsTypeController {

    constructor(
        private clientsTypeService: ClientsTypeService
    ) {

    }

    @Get()
    async getAllClientType() {
        return await this.clientsTypeService.getAllClientType();
    }

    @Post()
    async createClientType(@Body() clientType: ClientsTypeDto   ) {
        return await this.clientsTypeService.createClientType(clientType);
    }

    @Put(':id')
    async updateClientType(@Param('id') id: number, @Body() clientType: ClientsTypeDto) {
        return await this.clientsTypeService.updateClientType(id, clientType);
    }

    @Delete(':id')
    async deleteClientType(@Param('id') id: number) {
        return await this.clientsTypeService.deleteClientType(id);
    }
}
