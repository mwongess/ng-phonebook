import fastify from "fastify";
import { startServer } from "./lib/boot";
import routes from "./routes/routes";

const app = fastify({logger: true})


app.register(routes,{prefix: '/contacts'})

startServer(app)
