import {Router} from "express";
import UserController from "../controller/UserController";
import UserRepository from "../repositories/UserRepository";
import UserService from "../services/UserService";

const userRoutes = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.get('/', (req, res) => userController.get(req,res));

export {userRoutes};