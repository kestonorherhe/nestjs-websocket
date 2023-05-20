import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Message2 from './message2.entity';
import { Messages2Service } from './messages2.service';

@Controller('messages2')
export class Messages2Controller {
  constructor(private readonly messages2Service: Messages2Service) {}

  @Get()
  async getAllMessages(): Promise<Message2[]> {
    const messages = await this.messages2Service.getAllMessages();
    return messages;
  }

  @Get(':id')
  async getMessageById(@Param('id') id: string): Promise<Message2> {
    const message = await this.messages2Service.getMessageById(Number(id));
    return message;
  }

  @Post()
  async createMessage(@Body('content') content: string) {
    const newMessage = await this.messages2Service.createMessage(content);
    return newMessage;
  }
}
