import Usuario from "../../modelos/Usuario";
import { Response, Request } from "express";

export const traerUsuarioPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            res.status(400).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json({
            _id: usuario._id,
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            contrasenia: usuario.contrasenia,
            rol: usuario.rol,
        })
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer usuario por id' })
        console.log(error)
    }
}