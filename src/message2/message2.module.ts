import { Module } from '@nestjs/common';
import { Messages2Controller } from './messages2.controller';
import { Messages2Service } from './messages2.service';
import Message2 from './message2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message2Gateway } from './message2.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Message2])],
  controllers: [Messages2Controller],
  providers: [Messages2Service, Message2Gateway],
})
export class Messages2Module {}
