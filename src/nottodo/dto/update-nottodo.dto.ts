import { PartialType } from '@nestjs/mapped-types'
import { CreateNottodoDto } from './create-nottodo.dto'

export class UpdateNottodoDto extends PartialType(CreateNottodoDto) {}
