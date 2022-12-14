import {Router, Request, Response} from "express";
import UserController from "./controller/UserController";

const routes = Router();
const userController = new UserController();

routes.get('/', userController.get);

export {routes};