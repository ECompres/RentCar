import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InspectionDto } from './dtos/inspection.dto';
import { Inspection } from './entities/inspection.entity';

@Injectable()
export class InspectionService {

    constructor(
        @InjectRepository(Inspection)
        private readonly inspectionRepository: Repository<Inspection>
    ) { }

    async getAllInspection(): Promise<Inspection[]> {
        return await this.inspectionRepository.find();
    }

    async getInspection(id: number): Promise<Inspection> {
        return await this.inspectionRepository.findOne(id);
    }

    async createInspection(inspection: InspectionDto): Promise<Inspection> {
        return await this.inspectionRepository.save(inspection);
    }

    async updateInspection(id: number, inspection: InspectionDto): Promise<Inspection> {
        const oldInspection = await this.inspectionRepository.findOne(id);
        const editedInspection = Object.assign(oldInspection, inspection);
        return await this.inspectionRepository.save(editedInspection);
    }

    async deleteInspection(id: number): Promise<any> { 
        return await this.inspectionRepository.delete(id);
    }

}
