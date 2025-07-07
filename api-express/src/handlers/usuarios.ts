import {Request, Response} from 'express'

export const nuevoUsuario = async(request:Request,response:Response)=>{
    //guarda los campos requeridos para Sign-up
    const {email, password} = request.body;
    
    response.send('PANTALLA SIGNUP')
    
    }

export const cambiarPassword = async(request:Request,response:Response)=>{
    //guarda los campos requeridos para Sign-up
    const {email, password} = request.body;
    
    response.send('CAMBIO CONTRASEÑA')
    
    }