import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Beer } from '../model/beer.entity';
import { Repository } from 'typeorm';
import { BeerDTO } from './beer.dto';

@Injectable()
export class BeerService {
  constructor(@InjectRepository(Beer) private readonly repo: Repository<Beer>) { }

  public async getAll(): Promise<BeerDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => BeerDTO.fromEntity(e)));
  }

  public async create(dto: BeerDTO): Promise<BeerDTO> {
    return this.repo.save(BeerDTO.fromEntity(dto));
  }

}