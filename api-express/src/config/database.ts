import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
import Arriendo from '../models/Arriendo';
import Usuario from '../models/Usuario';
dotenv.config();

const db = new Sequelize({
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    models: [Arriendo, Usuario],
    define: { timestamps: false },
});

export default db;
