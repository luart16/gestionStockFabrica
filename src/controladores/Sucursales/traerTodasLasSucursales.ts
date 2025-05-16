import Sucursal from "../../modelos/Sucursal";
import { Response, Request } from "express";

export const traerTodasLasSucursales = async (req: Request, res: Response) => {
    try {
        const sucursales = await Sucursal.find()
        if (sucursales.length === 0) { // Verificar si el array está vacío
            res.status(404).json({ error: 'No hay sucursales registradas.' });
            return;
        }
        const todasLasSucursales = sucursales.map(sucursal => ({
            _id: sucursal._id,
            nombreSucursal: sucursal.nombreSucursal,
            direccion: sucursal.direccion,
            telefono: sucursal.telefono,

        }));
        res.status(200).json(todasLasSucursales);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer las sucursales.' })
        console.log(error)
    }
}