import {Router, Request, Response} from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.send("Hello World!!!!!!")
})

export {routes};