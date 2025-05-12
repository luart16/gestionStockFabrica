import Sucursal from "../../modelos/Sucursal";
import { Response, Request } from "express";

export const traerSucursalPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const sucursal = await Sucursal.findById(id);
        if (!sucursal) {
            res.status(400).json({ error: 'Sucursal no encontrada' });
            return;
        }
        res.status(200).json({
            _id: sucursal._id,
            nombreSucursal: sucursal.nombreSucursal,
            direccion: sucursal.direccion,
            telefono: sucursal.telefono,
        })
    }
    catch (error){
        res.status(500).json({error: 'Error al traer sucursal por id'})
        console.log(error)
    }
}