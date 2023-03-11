import { FastifyRequest, FastifyReply } from "fastify";

export const newContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, phone, email } = <
    { name: string; phone: number; email: string }
  >request.body;
  reply.send(request.body);
};

export const getContacts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  reply.send({ contacts: [] });
};

export const getContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = <{ id: string }>request.params;
  reply.send(id);
};

export const updateContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = <{ id: string }>request.params;
};

export const deleteContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = <{ id: string }>request.params;
};
