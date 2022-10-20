import { Router } from "express";
import { authRoute } from "./auth";
import { userRoutes } from "./user";
import { comorbidityRoutes } from "./comorbidity.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/comorbidity", comorbidityRoutes);

routes.use("/authenticate", authRoute);

export { routes };