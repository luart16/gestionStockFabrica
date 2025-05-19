import { Response, Request } from "express";
import bcrypt from 'bcryptjs';
import Usuario from "../../modelos/Usuario";

export const logincontroller = async (req: Request, res: Response) => {
    try {

        const {email, contrasenia} = req.body;
        const usuario = await Usuario.findOne({email});
        if (!usuario){
            res.status(401).json({ error: 'Usuario inválido.'})
            return
        }
        const contraseniaComparada = await bcrypt.compare(contrasenia, usuario.contrasenia)
        if (!contraseniaComparada){
            res.status(401).json({error: 'Contraseña inválida.'})
            return
        }
        res.status(200).json({nombreUsario: usuario.nombreUsuario, rol: usuario.rol})
    }
    catch(error){
        res.status(500).json({ error: 'Error al intentar loguearse.'})
        console.log(error)
    }
}