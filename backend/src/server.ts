import fastify from "fastify";
import { startServer } from "./lib/boots";

const app = fastify()

startServer(app)
