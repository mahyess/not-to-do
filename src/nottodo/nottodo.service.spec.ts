import { Test, TestingModule } from '@nestjs/testing'
import { NottodoService } from './nottodo.service'

describe('NottodoService', () => {
  let service: NottodoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NottodoService],
    }).compile()

    service = module.get<NottodoService>(NottodoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
