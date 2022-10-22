import { Router } from "express";
import { addressRoute } from "./address";
import { authRoute } from "./auth";
import { userRoutes } from "./user";
import { comorbidityRoutes } from "./comorbidity.routes";
import { commentRoutes } from "./comment";
import { topicRoutes } from "./topic";

const routes = Router();

routes.use("/address", addressRoute)
routes.use("/user", userRoutes);
routes.use("/comorbidity", comorbidityRoutes);
routes.use("/comment", commentRoutes);
routes.use("/topic", topicRoutes);

routes.use("/authenticate", authRoute);

export { routes };