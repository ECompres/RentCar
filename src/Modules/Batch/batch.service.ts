import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BatchDto } from './dtos/batch.dto';
import { Batch } from './entities/batch.entity';

@Injectable()
export class BatchService {

    constructor(
        @InjectRepository(Batch)
        private readonly batchRepository: Repository<Batch>
    ) { }


    async GetAll(): Promise<Batch[]> {
        return await this.batchRepository.find();
    }

    async getOne(id:number){
        return await this.batchRepository.findOne(id);
    }

    async createBatch(batch: BatchDto): Promise<Batch> {
        return await this.batchRepository.save(batch);
    }

    async updateBatch(id: number, batch: BatchDto): Promise<Batch> {
        const oldBatch = await this.batchRepository.findOne(id);
        const editedBatch = Object.assign(oldBatch, batch);
        return await this.batchRepository.save(editedBatch);
    }

    async deleteBatch(id: number): Promise<any> {
        return await this.batchRepository.delete(id);
    }
}
