import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { BeerModule } from './beer/beer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    BeerModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
