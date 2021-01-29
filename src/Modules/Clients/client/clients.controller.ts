import { Controller, Get, Param, Post, Body, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { response } from 'express';
import { ClientsService } from './clients.service';
import { ClientsTypeDto } from '../clientType/dto/clients-type.dto';
import { ClientsDto } from './dto/clients.dto';

@Controller('Clients')
export class ClientsController {

    constructor(private clientsService: ClientsService) { }

    @Get()
    async getAll() {
        return await this.clientsService.getAllClients();
    }

    @Get(':id')
    async getClient(@Param('id') id: number) {
        return await this.clientsService.getClient(id);
    }

    @Post()
    async createClient(@Body() client: ClientsDto) {
        return await this.clientsService.createClient(client);
    }

    @Put(':id')
    async updateClient(@Param('id') id: number, @Body() client: ClientsDto) {
        return await this.clientsService.updateClient(id, client);
    }

    @Delete(':id')
    async deleteClient(@Param('id') id: number) {
        return await this.clientsService.deleteClient(id);
    }
}
