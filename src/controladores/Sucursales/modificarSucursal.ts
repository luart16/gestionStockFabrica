import Sucursal from "../../modelos/Sucursal";
import { Response, Request } from "express";

export const modificarSucursalPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombreSucursal, direccion, telefono } = req.body;

        //Buscar la sucursal
        const sucursal = await Sucursal.findById(id);
        if (!sucursal) {
            res.status(400).json({ error: 'Sucursal no encontrada.' });
            return;
        }
        //Actualizar solo los campos proporcionados:
        if (nombreSucursal) {
            sucursal.nombreSucursal = nombreSucursal;
        }
        if (direccion) {
            sucursal.direccion = direccion;
        }
        if (telefono){
            sucursal.telefono = telefono;
        }
        
        const sucursalModificada = await sucursal.save();
        res.status(200).json(sucursalModificada);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al modificar la sucursal.'});

    }
}