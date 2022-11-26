import express from "express";
import {routes} from "./routes/index";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"));
