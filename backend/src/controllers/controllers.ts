import { FastifyRequest, FastifyReply } from "fastify";
import { db } from "../database/db";

export const newContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { name, phone, email } = <{ name: string; phone: number; email: string }>request.body;
    const connection = await db.getConnection();
    const query = `INSERT INTO contacts (name, phone, email) VALUES  (?, ?, ?) `;
    await connection.execute(query, [name, phone, email])
    connection.release()
    reply.send({message: "Contact added successfully"})
  } catch (error) {
    reply.send(error);
  }
};

export const getContacts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = `SELECT * FROM CONTACTS`;
    const connection = await db.getConnection();
    const [rows]= await connection.execute(query);
    connection.release()
    reply.send(rows);
  } catch (error) {
    reply.send(error);
  }
};

export const getContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
 try {
  const { id } = <{ id: string }>request.params;
  const query = `SELECT * FROM contacts WHERE id = ?`
  const connection = await db.getConnection()
  const [row] = await connection.execute(query, [id])
  connection.release()
  reply.send(row)
 } catch (error) {
  reply.send(error)
 }
};

export const updateContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = <{ id: string }>request.params;
     const { name, phone, email } = <{ name: string; phone: number; email: string }>request.body;
    const query = `UPDATE contacts SET name = ?,phone = ?, email = ? WHERE id = ?`
    const connection = await db.getConnection()
    await connection.execute(query, [name, phone, email, id])
    connection.release()
    reply.send({message: "Contact updated successfully"})
  } catch (error) {
    reply.send(error)
  }
};

export const deleteContact = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = <{ id: string }>request.params;
    const query = `DELETE FROM contacts WHERE id = ?`
    const connection = await db.getConnection()
    await connection.execute(query, [id],)
    connection.release()
    reply.send({message: "Contact deleted successfully"})
  } catch (error) {
    reply.send(error)
  }
};
