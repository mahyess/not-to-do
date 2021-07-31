import { IsBoolean, IsOptional, IsString, Length } from 'class-validator'

export class CreateNottodoDto {
  @IsString()
  @Length(5, 20)
  readonly name: string

  @IsString()
  @Length(10, 200)
  readonly description: string

  @IsBoolean()
  @IsOptional()
  readonly done: boolean
}
