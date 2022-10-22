import { Request, Response } from 'express';
import { autoInjectable, injectable } from 'tsyringe';
import  CommentService from '../services/CommentService';

@autoInjectable()
export default class CommentController{
    get (arg0: string, get: any){
        throw new Error("Method not implemented.");        
    }

    constructor(private commentService: CommentService) {}

    async create (request: Request, response: Response){
        try {
            const newComment = await this.commentService.create(request.body);
            response.status(201).json({id: newComment});
        } catch (error) {
            response.status(400).json('Invalid data');
        }
    }

    async findAll(request: Request, response: Response){
        const comment = await this.commentService.findAll();
        return response.json(comment);
    }

    async update(request: Request, response:Response){
        const { id } = request.params;
        const { description } = request.body;
        try {
            const existComment = await this.commentService.findUnique(Number(id));
            if (!existComment) {
                return response.status(404).json('This comment is not registered');
            }
            const updateComment = await this.commentService.update(Number(id), description);
            return response.status(200).json(updateComment);
        } catch (error) {
            return response.status(400).json('Invalid Data');
        }
    }

    async delete (request: Request, response: Response){
        const { id } = request.params;
        const existComment = await this.commentService.findUnique(Number(id));
        if (!existComment) {
            return response.status(404).json('This comment is not registered');
        }
        const deleteComment = await this.commentService.delete(Number(id));
        return response.status(204).json(deleteComment);
    }
}

