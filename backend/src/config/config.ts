import { createPool, Pool } from 'mysql2/promise';import dotenv from 'dotenv'
dotenv.config()

const mysqlConfig = {
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 5, 
}

export const pool: Pool = createPool(mysqlConfig)