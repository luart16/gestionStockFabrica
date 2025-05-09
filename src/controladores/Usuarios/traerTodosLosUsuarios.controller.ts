import Usuario from "../../modelos/Usuario";
import { Response, Request } from "express";

export const traerTodosUsuarios = async (req: Request, res: Response) => {
    try {
        const usuario = await Usuario.find()
        if (usuario.length === 0) { // Verificar si el array está vacío
            res.status(404).json({ error: 'No hay usuarios registrados' });
            return;
        }
          const todosLosUsuarios = usuario.map(usuarios => ({
            _id: usuarios._id,
            nombreUsuario:usuarios.nombreUsuario,
            contrasenia: usuarios.contrasenia,
            email: usuarios.email,
            rol:usuarios.rol
        }));
        res.status(200).json(todosLosUsuarios);
    }
    catch (error){
        res.status(500).json({error: 'Error al traer usuario por id'})
        console.log(error)
    }
}