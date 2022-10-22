import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import ComorbidityController from "../controller/ComorbidityController";

const comorbidityRoutes = Router();

const comorbidityController = container.resolve<ComorbidityController>(ComorbidityController)

comorbidityRoutes.post('/', (req, res) => comorbidityController.create(req,res));
comorbidityRoutes.get('/', (req, res) => comorbidityController.findAll(req,res));
comorbidityRoutes.put('/:id', (req, res) => comorbidityController.update(req,res));
comorbidityRoutes.delete('/:id', (req, res) => comorbidityController.delete(req,res));

export {comorbidityRoutes};