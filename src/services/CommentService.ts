import { Prisma } from '@prisma/client';
import { autoInjectable } from 'tsyringe';
import { CommentDTO } from '../models/Comment';
import  CommentRepository  from '../repositories/CommentRepository';

@autoInjectable()
export default class CommentService {
    constructor(private commentRepository: CommentRepository){}

    async create(comment: CommentDTO): Promise<number> {
        let commentDTO: Prisma.CommentCreateInput;

        commentDTO = {
            topic: {connect: {id: comment.topicId }},
            description: comment.description,
            user: {connect: {codUser: comment.userId}},
        };

        const newComment = await this.commentRepository.create(commentDTO);
        return newComment.id;
    }

    async findAll(){
        const comment = await this.commentRepository.findAll();
        return comment;
    }

    async update(id: number, description: string) {
		const updateComment = this.commentRepository.update(id, description);
		return updateComment;
	}

    async findUnique(id: number) {
		const existComment = await this.commentRepository.findUnique(id);
		return existComment;
	}

    async delete(id: number){
		const deleteComment = this.commentRepository.delete(id);
		return deleteComment;
	}
}