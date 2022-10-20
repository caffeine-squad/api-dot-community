import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const authRoute = Router();
const authController = new AuthController();

authRoute.use("/", authController.autentication);

export { authRoute }