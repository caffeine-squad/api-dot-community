import { Router } from "express";
import 'reflect-metadata';
import { container } from "tsyringe";
import AuthController from "../controller/AuthController";

const authRoute = Router();
const authController = container.resolve<AuthController>(AuthController)

authRoute.use("/", (req, res) => authController.autentication(req, res));

export { authRoute }