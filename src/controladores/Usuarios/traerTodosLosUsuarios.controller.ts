import Usuario from "../../modelos/Usuario";
import { Response, Request } from "express";

export const traerTodosLosUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.find()
        if (usuarios.length === 0) { // Verificar si el array está vacío
            res.status(404).json({ error: 'No hay usuarios registrados' });
            return;
        }
        const todosLosUsuarios = usuarios.map(usuario => ({
            _id: usuario._id,
            nombreUsuario: usuario.nombreUsuario,
            contrasenia: usuario.contrasenia,
            email: usuario.email,
            rol: usuario.rol
        }));
        res.status(200).json(todosLosUsuarios);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer los usuarios' })
        console.log(error)
    }
}