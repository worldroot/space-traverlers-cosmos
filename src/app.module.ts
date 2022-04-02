/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { HttpModule } from  '@nestjs/axios'

@Module({
  imports: [HttpModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
