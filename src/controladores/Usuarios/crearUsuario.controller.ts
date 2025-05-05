import Usuario from "../../modelos/Usuario";
import { Response, Request } from "express";
import bcrypt from "bcryptjs"

interface DatosUsuarios {
    nombreUsuario: string
    email: string
    contrasenia: string
    rol: 'administrador' | 'vendedor',
}

export const crearUsuarioControlador = async (req:Request,res:Response) => {
    try{
        const { nombreUsuario, email, contrasenia, rol } = req.body as DatosUsuarios;
        const contraseniaEncriptada = await bcrypt.hash(contrasenia, 10); //esto es para que me encripte la contraseña y no se vea en la BD
        const nuevoUsuario = new Usuario ({
            nombreUsuario,
            email,
            contrasenia: contraseniaEncriptada,
            rol
        })
        await nuevoUsuario.save();
        res.status(201).json({message: 'Usuario creado exitosamente.'});
    }
    catch(error){
        res.status(500).json({error: 'Error al crear el usuario.'});
    }
}