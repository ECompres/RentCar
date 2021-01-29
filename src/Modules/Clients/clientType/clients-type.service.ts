import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsTypeDto } from './dto/clients-type.dto';
import { ClientsType } from './entities/clients-type.entity';

@Injectable()
export class ClientsTypeService {

    constructor(
        @InjectRepository(ClientsType)
        private readonly clientsTypeRepository: Repository<ClientsType>
    ) { }

    async getAllClientType(): Promise<ClientsType[]> {
        return await this.clientsTypeRepository.find();
    }

    async createClientType(clientType: ClientsTypeDto): Promise<ClientsType> {
        return await this.clientsTypeRepository.save(clientType);
    }

    async updateClientType(id: number, clientType: ClientsTypeDto): Promise<ClientsType> {
        const oldClientType = await this.clientsTypeRepository.findOne(id);
        const editedClientType = Object.assign(oldClientType, clientType);
        return await this.clientsTypeRepository.save(editedClientType);
    }

    async deleteClientType(id: number): Promise<any> {
        return await this.clientsTypeRepository.delete(id);
    }
}
