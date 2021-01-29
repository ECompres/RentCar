import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { Repository } from 'typeorm';
import { ClientsTypeDto } from '../clientType/dto/clients-type.dto';
import { ClientsDto } from './dto/clients.dto';
import { ClientsType } from '../clientType/entities/clients-type.entity';
import { Clients } from './entities/clients.entity';

@Injectable()
export class ClientsService {

    constructor(
        @InjectRepository(Clients)
        private readonly clientsRepository: Repository<Clients>,) { }

    async getAllClients(): Promise<Clients[]> {
        return await this.clientsRepository.find();
    }

    async getClient(id: number): Promise<Clients> {
        return await this.clientsRepository.findOne(id);
    }

    async createClient(client: ClientsDto): Promise<Clients> {
        return await this.clientsRepository.save(client);
    }

    async updateClient(id: number, client: ClientsDto): Promise<Clients> {
        const oldClient = await this.clientsRepository.findOne(id);
        const editedClient = Object.assign(oldClient, client);
        return await this.clientsRepository.save(editedClient);
    }

    async deleteClient(id: number): Promise<any> {
        return await this.clientsRepository.delete(id);
    }

}
