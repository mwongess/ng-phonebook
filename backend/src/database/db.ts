import { pool } from "../config/config";

const getDb = () => {
  pool;
};

export const db = getDb()

