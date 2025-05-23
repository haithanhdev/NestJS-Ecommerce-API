import { Injectable } from '@nestjs/common';
import { ChatRepo } from './chat.repo';
import { CreateMessageBodyType, GetMessagesQueryType } from './chat.model';

@Injectable()
export class ChatService {
    constructor(private readonly chatRepo: ChatRepo) {}
    
    async list(props: {query: GetMessagesQueryType}) {
        return this.chatRepo.list(props.query)
    }
    listReceivers({fromUserId}) {
        return this.chatRepo.listReceivers(fromUserId)
    }
    create(data: CreateMessageBodyType) {
        return this.chatRepo.create(data)
    }
}
