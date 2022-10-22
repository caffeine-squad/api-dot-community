import 'reflect-metadata'
import {Router} from "express";
import { container } from "tsyringe";
import UserController from "../controller/UserController";

const userRoutes = Router();

const userController = container.resolve<UserController>(UserController)

userRoutes.post('/', (req, res) => userController.create(req,res));
userRoutes.get('/', (req, res) => userController.getAll(req,res));
userRoutes.get('/:id', (req, res) => userController.getById(req,res));

export {userRoutes};