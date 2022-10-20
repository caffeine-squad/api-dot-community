import { Router } from "express";
import { authRoute } from "./auth";
import { userRoutes } from "./user";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/authenticate", authRoute);

export { routes };