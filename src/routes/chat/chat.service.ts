import { Injectable } from '@nestjs/common';
import { ChatRepo } from './chat.repo';
import { CreateMessageBodyType, GetMessagesQueryType } from './chat.model';

@Injectable()
export class ChatService {
    constructor(private readonly chatRepo: ChatRepo) {}
    
    async list(props: {query: GetMessagesQueryType}) {
        const data = await this.chatRepo.list({...props.query})
        return data;
    }
    create(data: CreateMessageBodyType) {
        return this.chatRepo.create(data)
    }
}
