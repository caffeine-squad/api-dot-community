import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import CommentController from "../controller/CommentController";
import EnsureAdmin from "../middlewares/EnsureAdmin";
import EnsureAuthenticated from "../middlewares/EnsureAuthenticated";

const commentRoutes = Router();

const commentController = container.resolve<CommentController>(CommentController)

commentRoutes.post('/', EnsureAuthenticated, (req, res) => commentController.create(req,res));
commentRoutes.get('/', EnsureAuthenticated, EnsureAdmin, (req, res) => commentController.findAll(req,res));
commentRoutes.put('/:id', EnsureAuthenticated, (req, res) => commentController.update(req,res));
commentRoutes.delete('/:id', EnsureAuthenticated, (req, res) => commentController.delete(req,res));

export {commentRoutes};