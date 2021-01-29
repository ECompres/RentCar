import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { BatchService } from './batch.service';
import { BatchDto } from './dtos/batch.dto';

@Controller('Batch')
export class BatchController {

    constructor(
        private readonly batchService: BatchService
    ) {

    }

    @Get()
    async getAllBatch() {
        return await this.batchService.GetAll();
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return await this.batchService.getOne(id);
    }

    @Post()
    async createBatch(@Body() batch: BatchDto) {
        return await this.batchService.createBatch(batch);
    }

    @Put(':id')
    async updateBatch(@Body() batch: BatchDto, @Param('id') id: number) {
        return await this.batchService.updateBatch(id, batch);
    }

    @Delete(':id')
    async deleteBatch(@Param('id') id: number) {
        return await this.batchService.deleteBatch(id);
    }
}
