import { Test, TestingModule } from '@nestjs/testing';
import { NottodoController } from './nottodo.controller';

describe('NottodoController', () => {
  let controller: NottodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NottodoController],
    }).compile();

    controller = module.get<NottodoController>(NottodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
