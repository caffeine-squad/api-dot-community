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
            user: {connect: {codUser: topic.userId}},
            description: topic.description,
            title: topic.title
        };
        const newTopic = await this.topicRepository.create(topicDTO);
        return newTopic.id;
    }

    async findAll(){
        const topic = await this.topicRepository.findAll();
        return topic;
    }

    async update(id: number, description: string, title: string) {
		const updateTopic = await this.topicRepository.update(id, description, title);
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