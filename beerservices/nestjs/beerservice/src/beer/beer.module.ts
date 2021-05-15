import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeerService } from './beer.service';
import { BeerController } from './beer.controller';
import { Beer } from '../model/beer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beer])],
  providers: [BeerService],
  controllers: [BeerController],
})
export class BeerModule {}