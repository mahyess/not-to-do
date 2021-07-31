import { NotFoundException } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { CreateNottodoDto, UpdateNottodoDto } from './dto'
import { NotTodo } from './entities/nottodo.entity'

@Injectable()
export class NottodoService {
  private notTodoList: NotTodo[] = [
    {
      id: 1,
      name: 'todo',
      description: 'todo description',
    },
  ]

  getAllNotTodos = (): NotTodo[] => this.notTodoList

  findOne = (id: number): NotTodo => {
    const instance = this.notTodoList.find((item) => item.id === id)
    if (!instance) {
      throw new NotFoundException(`${id} not found`)
    }
    return instance
  }

  createNewNotTodo = (validatedData: CreateNottodoDto): NotTodo => {
    const id = this.notTodoList[this.notTodoList.length - 1].id + 1
    this.notTodoList.push({
      id: id,
      ...validatedData,
    })
    return this.findOne(id)
  }

  partialUpdate = (id, validatedData: UpdateNottodoDto): NotTodo => {
    if (!this.findOne(id)) {
      throw new NotFoundException(`${id} not found`)
    }
    console.log(validatedData)
    this.notTodoList = this.notTodoList.map((instance) =>
      instance.id === id ? { ...instance, ...validatedData } : instance,
    )
    return this.findOne(id)
  }

  deleteNottodo = (id): void => {
    if (!this.findOne(id)) {
      throw new NotFoundException(`${id} not found`)
    }
    this.notTodoList = this.notTodoList.filter((instance) => instance.id !== id)
    return
  }
}
