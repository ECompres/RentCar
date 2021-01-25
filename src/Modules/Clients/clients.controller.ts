import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('Clients')
export class ClientsController {

    constructor(private clientsService: ClientsService) { }

}
