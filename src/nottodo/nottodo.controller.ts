import {
  Get,
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { CreateNottodoDto, UpdateNottodoDto } from './dto'
import { NottodoService } from './nottodo.service'

@Controller('nottodo')
export class NottodoController {
  constructor(private readonly notTodoService: NottodoService) {}

  @Get()
  list() {
    return this.notTodoService.getAllNotTodos()
  }

  @Get(':id')
  retrieve(@Param('id') id: number) {
    return this.notTodoService.findOne(id)
  }

  @Post()
  create(@Body() dto: CreateNottodoDto) {
    return this.notTodoService.createNewNotTodo(dto)
  }

  @Patch(':id')
  partialUpdate(@Body() dto: UpdateNottodoDto, @Param('id') id: number) {
    return this.notTodoService.partialUpdate(id, dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: number) {
    return this.notTodoService.deleteNottodo(id)
  }
}
