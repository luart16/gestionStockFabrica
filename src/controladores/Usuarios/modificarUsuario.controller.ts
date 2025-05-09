import Usuario from "../../modelos/Usuario";
import { Response, Request } from "express";
import bcrypt from 'bcryptjs';

export const modificarUsuarioPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombreUsuario, email, contrasenia, rol } = req.body;

        //Buscar el usuario
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            res.status(400).json({ error: 'Usuario no encontrado.' });
            return;
        }
        //Actualizar solo los campos proporcionados:
        if (nombreUsuario) {
            usuario.nombreUsuario = nombreUsuario;
        }
        if (email) {
            usuario.email = email;
        }
        if (contrasenia){
            usuario.contrasenia = await bcrypt.hash(contrasenia, 10);
        }if (rol) {
            usuario.rol = rol;
        }

        const usuarioModificado = await usuario.save();
        res.status(200).json(usuarioModificado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al modificar los datos.'});

    }
}