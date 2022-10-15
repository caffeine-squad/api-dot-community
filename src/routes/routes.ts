import {Router, Request, Response} from "express";
import UserController from "../controller/UserController";
import { comorbidityRoutes } from "./comorbidity.routes";

const routes = Router();
const userController = new UserController();

 routes.get('/', userController.get);

 routes.use("/comorbidity", comorbidityRoutes);

export {routes};