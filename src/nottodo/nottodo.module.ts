import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { NottodoController } from './nottodo.controller'
import { NottodoService } from './nottodo.service'
import { NotTodo } from './entities/nottodo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([NotTodo])],
  controllers: [NottodoController],
  providers: [NottodoService],
})
export class NottodoModule {}
