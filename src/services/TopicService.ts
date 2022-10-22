import { Address, Prisma, User } from '@prisma/client';
import { autoInjectable } from 'tsyringe';
import { TopicDTO } from '../models/Topic';
import  TopicRepository  from '../repositories/TopicRepository';

@autoInjectable()
export default class TopicService {
    constructor(private topicRepository: TopicRepository){}

    async create(topic: TopicDTO): Promise<number> {
        let topicDTO: Prisma.TopicCreateInput;

        topicDTO = {
            description: topic.description
        };
        const newTopic = this.topicRepository.create(topicDTO);
        return newTopic;
    }

    async findAll(){
        const topic = await this.topicRepository.findAll();
        return topic;
    }

    async update(id: number, description: string) {
		const updateTopic = this.topicRepository.update(id, description);
		return updateTopic;
	}

    async findUnique(id: number) {
		const existTopic = await this.topicRepository.findUnique(id);
		return existTopic;
	}

    async delete(id: number){
		const deleteTopic = this.topicRepository.delete(id);
		return deleteTopic;
	}
}