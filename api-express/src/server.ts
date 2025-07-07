import Express from 'express';
import router from './router';
import db from './config/database';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';

dotenv.config();
console.log('FRONTEND_URL en .env es:', process.env.FRONTEND_URL);

const server = Express();

// Conectar a la BD
async function conectarBD() {
    try {
        await db.authenticate();
        db.sync();
        console.log('Conectado correctamente a la BD');
    } catch (error) {
        console.log('Error al conectar a BD');
        console.log(error);
    }
}

conectarBD();

// CORS
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        console.log('Origin recibido:', origin);
        console.log('Esperado:', process.env.FRONTEND_URL);
        if (!origin || origin === process.env.FRONTEND_URL) {
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'), false);
        }
    },
};

server.use(cors(corsOptions));
server.use(Express.json());
server.use('/api', router);

export default server;
