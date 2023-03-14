import { FastifyPluginCallback, FastifyReply, FastifyRequest } from "fastify";
import {
  deleteContact,
  getContact,
  getContacts,
  newContact,
  updateContact,
} from "../controllers/controllers";

const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            name: { type: "string" },
            phone: { type: "number" },
            email: { type: "string" },
          },
          required: ["name", "phone", "email"],
        },
      },
    },
    newContact
  );

  fastify.get("/", getContacts);

  fastify.get("/:id", getContact);

  fastify.put(
    "/:id",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            name: { type: "string" },
            phone: { type: "number" },
            email: { type: "string" },
          },
          required: ["name", "phone", "email"],
        },
      },
    },
    updateContact
  );

  fastify.delete("/:id", deleteContact);
  done();
};

export default routes;
