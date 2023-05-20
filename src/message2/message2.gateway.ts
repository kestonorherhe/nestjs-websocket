import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Messages2Service } from './messages2.service';

@WebSocketGateway({ cors: true })
export class Message2Gateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagesService: Messages2Service) {}

  private logger: Logger = new Logger('Message2Gateway');

  @WebSocketServer() wss: Server;

  afterInit(server: Server) {
    this.logger.log('Messages2 Initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client Connected: ${client.id}`);
  }

  // @SubscribeMessage('getMessages')
  // async handleGetMessage(client: Socket): Promise<void> {
  //   const messages = await this.messagesService.getAllMessages();
  //   this.wss.emit('receiveMessage', messages);
  // }

  @SubscribeMessage('sendMessage2')
  async handleSendMessage(client: Socket, payload: string): Promise<void> {
    const newMessage = await this.messagesService.createMessage(payload);
    this.wss.emit('receiveMessage2', newMessage);
  }
}
