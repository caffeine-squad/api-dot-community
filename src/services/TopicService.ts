import { Prisma } from '@prisma/client';
import { autoInjectable } from 'tsyringe';
import { TopicDTO, GetTopicDTO, GetAllTopicDTO } from '../models/Topic';
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

        const topicResponse: GetAllTopicDTO[] = [];

        topic.forEach(item => {
            const topicResult = {
                id: item.id,
                title: item.title,
                description: item.description,
                creationDate: item.creationDate,
                userId: item.user.codUser,
                userName: item.user.name,
                numberOfComments: item._count,
            }
            topicResponse.push(topicResult);
        })
        
        return topicResponse;
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

    async getById(id: number): Promise<GetTopicDTO | undefined> {

        const response = (await this.topicRepository.getById(id));
        console.log(response);
        if(response != null) {
            const topicResponse = {
                id: response.id,
                title: response.title,
                description: response.description,
                creationDate: response.creationDate,
                userId: response.user.codUser,
                userName: response.user.name
            }
            return topicResponse;
        }

        return response;
    }
}