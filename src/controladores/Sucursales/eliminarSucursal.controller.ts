import Sucursal from "../../modelos/Sucursal";
import { Response, Request } from "express";

export const eliminarSucursalPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const sucursal = await Sucursal.findByIdAndDelete(id);
        if (!sucursal) {
            res.status(400).json({ error: 'Sucursal no encontrada.' });
            return;
        }
        res.status(200).json('Sucursal eliminada correctamente.');
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar la sucursal.' });
        console.log(error);
    }
}