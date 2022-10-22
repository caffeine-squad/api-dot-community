import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import TopicController from "../controller/TopicController";

const topicRoutes = Router();

const topicController = container.resolve<TopicController>(TopicController)

topicRoutes.post('/', (req, res) => topicController.create(req,res));
topicRoutes.get('/', (req, res) => topicController.findAll(req,res));
topicRoutes.put('/:id', (req, res) => topicController.update(req,res));
topicRoutes.delete('/:id', (req, res) => topicController.delete(req,res));

export {topicRoutes};