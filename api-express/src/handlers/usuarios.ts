import { Request, Response } from 'express';
import Usuario from '../models/Usuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const SECRET = process.env.SECRET_KEY;
    try {
        //el usuario existe?
        const usuario = await Usuario.findByPk(email);
        if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
            response.status(401).json({ error: 'Credenciales incorrectas' });
        }

        //Credenciales correctas: creación token
        const token = jwt.sign({ email: usuario.email }, SECRET, {
            expiresIn: '1h',
        });
        response.json({ token });
    } catch (error) {
        console.error('Error en Login:', error);
        response.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const nuevoUsuario = async (request: Request, response: Response) => {
    //guarda los campos requeridos para Sign-up
    const { email, password } = request.body;
    console.log(
        'Nuevo usuario:',
        email,
        password ? 'password recibido' : 'sin password'
    );
    if (!email || !password) {
        response.status(400).json({ error: 'Rellena los campos obligatorios' });
    }

    try {
        const existente = await Usuario.findByPk(email);
        if (existente) {
            response
                .status(400)
                .json({ error: 'Ya existe una cuenta con este correo' });
        }
        const crearUsuario = await Usuario.create({ email, password });
        response.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        console.error('Error al registrar el usuario', error);
        response.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const cambiarPassword = async (request: Request, response: Response) => {
    //guarda los campos requeridos para Sign-up
    const { email, password } = request.body;
    response.send('CAMBIO CONTRASEÑA');
};
