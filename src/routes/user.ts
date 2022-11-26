import 'reflect-metadata'
import {Router} from "express";
import { container } from "tsyringe";
import UserController from "../controller/UserController";
import EnsureAuthenticated from '../middlewares/ensureAuthenticated';
import EnsureAdmin from '../middlewares/ensureAdmin';

const userRoutes = Router();

const userController = container.resolve<UserController>(UserController)

userRoutes.post('/', (req, res) => userController.create(req,res));
userRoutes.get('/', EnsureAuthenticated, EnsureAdmin, (req, res) => userController.getAll(req,res));
userRoutes.get('/:id', EnsureAuthenticated, EnsureAdmin, (req, res) => userController.getById(req,res));

export {userRoutes};