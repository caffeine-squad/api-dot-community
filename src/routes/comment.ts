import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import CommentController from "../controller/CommentController";

const commentRoutes = Router();

const commentController = container.resolve<CommentController>(CommentController)

commentRoutes.post('/', (req, res) => commentController.create(req,res));
commentRoutes.get('/', (req, res) => commentController.findAll(req,res));
commentRoutes.put('/:id', (req, res) => commentController.update(req,res));
commentRoutes.delete('/:id', (req, res) => commentController.delete(req,res));

export {commentRoutes};