import { Request, Response } from 'express';
import { autoInjectable, injectable } from 'tsyringe';
import  TopicService from '../services/TopicService';

@autoInjectable()
export default class TopicController{
    get (arg0: string, get: any){
        throw new Error("Method not implemented.");        
    }

    constructor(private topicService: TopicService) {}

    async create (request: Request, response: Response){
        try {
            const newTopic = await this.topicService.create(request.body);
            response.status(201).json({id: newTopic});
        } catch (error) {
            response.status(400).json('Invalid data');
        }
    }

    async findAll(request: Request, response: Response){
        const topic = await this.topicService.findAll();
        return response.json(topic);
    }

    async update(request: Request, response:Response){
        const { id } = request.params;
        const { description, title } = request.body;
        try {
            const existTopic = await this.topicService.findUnique(Number(id));
            if (!existTopic) {
                return response.status(404).json('This topic is not registered');
            }
            const updateTopic = await this.topicService.update(Number(id), description, title);
            return response.status(204).send();
        } catch (error) {
            return response.status(400).json('Invalid Data');
        }
    }

    async delete (request: Request, response: Response){
        const { id } = request.params;
        const existTopic = await this.topicService.findUnique(Number(id));
        if (!existTopic) {
            return response.status(404).json('This topis is not registered');
        }
        const deleteTopic = await this.topicService.delete(Number(id));
        return response.status(204).json(deleteTopic);
    }
}