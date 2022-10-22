import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import ComorbidityController from "../controller/ComorbidityController";

const comorbidityRoutes = Router();

const comorbidityController = container.resolve<ComorbidityController>(ComorbidityController)

comorbidityRoutes.post('/create', (req, res) => comorbidityController.create(req,res));
comorbidityRoutes.get('/findAll', (req, res) => comorbidityController.findAll(req,res));
comorbidityRoutes.put('/update/:id', (req, res) => comorbidityController.update(req,res));
comorbidityRoutes.delete('/delete/:id', (req, res) => comorbidityController.delete(req,res));

export {comorbidityRoutes};