import { Module } from '@nestjs/common'
import { NottodoController } from './nottodo.controller'
import { NottodoService } from './nottodo.service'

@Module({
  imports: [],
  controllers: [NottodoController],
  providers: [NottodoService],
})
export class NottodoModule {}
