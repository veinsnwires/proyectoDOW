import {Request, Response} from 'express'

export const login = async(request:Request,response:Response)=>{
    //guarda los campos requeridos para login
    const {email, password} = request.body;
    
    //validacion
    if (email === "admin@admin.com" && password ==="123456"){
        //codigos de estado HTTP: (200) = OK -> DEVUELVE JSON
        response.status(200).json({mensaje: "Login correcto"});
    }else {
        //codigos de estado HTTP: (401) = UNAUTHORIZED 
        response.status(401).json({error: "Credenciales incorrectas"});
    }
    }

