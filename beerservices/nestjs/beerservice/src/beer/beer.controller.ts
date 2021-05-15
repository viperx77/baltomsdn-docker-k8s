import { Body, Controller, Get, Post } from '@nestjs/common';
import { BeerService } from './beer.service';
import { BeerDTO } from './beer.dto';

@Controller('beer')
export class BeerController {
  constructor(private service: BeerService) { }

  @Get()
  public async getAll(): Promise<BeerDTO[]> {
    return await this.service.getAll()
  }

  @Post()
  public async post(@Body() dto: BeerDTO): Promise<BeerDTO> {
    return this.service.create(dto);
  }

}