import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TestController } from './controllers/test/test.controller';

@Module({
  imports: [HttpModule],
  controllers: [TestController],
})
export class TestModule {}
