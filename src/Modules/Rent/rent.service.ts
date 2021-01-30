import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { Repository } from 'typeorm';
import { Rent } from './entities/rent.entity';
import { RentDto } from './dtos/rent.dto';

@Injectable()
export class RentService {
    constructor(
        @InjectRepository(Rent)
        private readonly rentRepository: Repository<Rent>
    ) { }

    async getAllRents(): Promise<Rent[]> {
        return await this.rentRepository.find();
    }

    async getRent(id: number): Promise<Rent> {
        return await this.rentRepository.findOne(id);
    }

    async createRent(rent: RentDto): Promise<Rent> {
        return await this.rentRepository.save(rent);
    }

    async updateRent(id: number, rent: RentDto): Promise<Rent> {
        const oldRent = await this.rentRepository.findOne(id);
        const editedRent = Object.assign(oldRent, rent);
        return await this.rentRepository.save(editedRent);
    }

    async deleteRent(id: number): Promise<any> {
        return await this.rentRepository.delete(id);
    }
}
