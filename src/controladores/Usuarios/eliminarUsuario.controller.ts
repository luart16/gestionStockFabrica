import Usuario from "../../modelos/Usuario";
import { Response, Request } from "express";

export const eliminarUsuarioPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findByIdAndDelete(id);
        if (!usuario) {
            res.status(400).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json('Usuario eliminado correctamente')
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar usuario' })
        console.log(error)
    }
}