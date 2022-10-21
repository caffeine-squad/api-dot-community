import { Router } from "express";
import { addressRoute } from "./address";
import { authRoute } from "./auth";
import { userRoutes } from "./user";

const routes = Router();

routes.use("/address", addressRoute)
routes.use("/users", userRoutes);
routes.use("/authenticate", authRoute);

export { routes };