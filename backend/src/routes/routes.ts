import { FastifyPluginCallback, FastifyReply, FastifyRequest } from "fastify";

const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get("/", async (request, reply) => {
    reply.send({ contacts: [] });
  });

  fastify.get("/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = <{ id: string }>request.params;
    reply.send(id);
  });

  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { name, phone, email } = <
      { name: string; phone: number; email: string }
    >request.body;
    reply.send(request.body);
  });

  fastify.put("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = <{ id: string }>request.params;
  });

  fastify.delete("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = <{ id: string }>request.params;
  });
  done();
};

export default routes;
