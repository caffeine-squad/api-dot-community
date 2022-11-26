import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import TopicController from "../controller/TopicController";
import EnsureAuthenticated from "../middlewares/EnsureAuthenticated";

const topicRoutes = Router();

const topicController = container.resolve<TopicController>(TopicController)

topicRoutes.post('/', EnsureAuthenticated, (req, res) => topicController.create(req,res));
topicRoutes.get('/', EnsureAuthenticated, (req, res) => topicController.findAll(req,res));
topicRoutes.put('/:id', EnsureAuthenticated, (req, res) => topicController.update(req,res));
topicRoutes.delete('/:id', EnsureAuthenticated, (req, res) => topicController.delete(req,res));

export {topicRoutes};