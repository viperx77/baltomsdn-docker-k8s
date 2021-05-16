import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID, } from 'class-validator';
import { Beer } from '../model/beer.entity';

export class BeerDTO implements Readonly<BeerDTO> {
  
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  style: string;

  @ApiProperty({ required: true })
  @IsNumber()
  abv: number;

  public static from(dto: Partial<BeerDTO>): BeerDTO {
    const it = new BeerDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.style = dto.style;
    it.abv = dto.abv;
    return it;
  }

  public static fromEntity(entity: Beer): BeerDTO {
    return this.from({
      id: entity.id,
      name: entity.name,
      style: entity.style,
      abv: entity.abv
    });
  }
}