import { FastifyPluginCallback, FastifyReply, FastifyRequest } from "fastify";
import {
  deleteContact,
  getContact,
  getContacts,
  newContact,
  updateContact,
} from "../controllers/controllers";

const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.post("/", newContact);

  fastify.get("/", getContacts);

  fastify.get("/:id", getContact);

  fastify.put("/", updateContact);

  fastify.delete("/", deleteContact);
  done();
};

export default routes;
