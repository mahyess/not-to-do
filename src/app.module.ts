import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NottodoModule } from './nottodo/nottodo.module';

@Module({
  imports: [NottodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
