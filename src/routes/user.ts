import {Router} from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import UserController from "../controller/UserController";

const userRoutes = Router();

const userController = container.resolve<UserController>(UserController)

userRoutes.post('/create', (req, res) => userController.create(req,res));

export {userRoutes};