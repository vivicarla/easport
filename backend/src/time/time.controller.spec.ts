import { Test, TestingModule } from '@nestjs/testing';
import { TimesController } from './time.controller';
import { TimesService } from './time.service';

describe('TimesController', () => {
  let controller: TimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimesController],
      providers: [TimesService],
    }).compile();

    controller = module.get<TimesController>(TimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
