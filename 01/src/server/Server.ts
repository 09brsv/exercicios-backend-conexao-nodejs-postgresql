import express from "express";
import 'express-async-errors'
import 'dotenv/config'
import { router } from "./routes/router";
import { middlewares } from './shared/middleware';

const server = express();

server.use(express.json());
server.use(router);
server.use(middlewares.errors)

export { server }