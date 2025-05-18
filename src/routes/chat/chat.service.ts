import { Injectable } from '@nestjs/common';
import { ChatRepo } from './chat.repo';
import { CreateMessageBodyType, GetMessagesQueryType } from './chat.model';

@Injectable()
export class ChatService {
    constructor(private readonly chatRepo: ChatRepo) {}
    
    async list(props: {query: GetMessagesQueryType}) {
        return this.chatRepo.list(props.query)
    }
    listReceivers(props: {query}) {
        return this.chatRepo.listReceivers(props.query)
    }
    create(data: CreateMessageBodyType) {
        return this.chatRepo.create(data)
    }
}
