import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import ComorbidityController from "../controller/ComorbidityController";
import EnsureAdmin from "../middlewares/EnsureAdmin";
import EnsureAuthenticated from "../middlewares/EnsureAuthenticated";

const comorbidityRoutes = Router();

const comorbidityController = container.resolve<ComorbidityController>(ComorbidityController)

comorbidityRoutes.post('/', EnsureAuthenticated, (req, res) => comorbidityController.create(req,res));
comorbidityRoutes.get('/', EnsureAuthenticated, (req, res) => comorbidityController.findAll(req,res));
comorbidityRoutes.put('/:id', EnsureAuthenticated, EnsureAdmin, (req, res) => comorbidityController.update(req,res));
comorbidityRoutes.delete('/:id', EnsureAuthenticated, EnsureAdmin, (req, res) => comorbidityController.delete(req,res));

export {comorbidityRoutes};