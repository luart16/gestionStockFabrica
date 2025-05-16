import Sucursal from "../../modelos/Sucursal";
import { Response, Request } from "express";

interface DatosSucursales {
    nombreSucursal: String
    direccion: String
    telefono?: String
}

//función principal del controlador:
export const crearSucursal = async (req: Request, res: Response) => {
    try {
        const { nombreSucursal, direccion, telefono } = req.body as DatosSucursales;
        //creo una nueva sucursal y la guardo en la DB con .save:
        const nuevaSucursal = new Sucursal({
            nombreSucursal,
            direccion,
            telefono,
        })
        await nuevaSucursal.save();// aquí guardo la nueva
        res.status(201).json({ message: 'Sucursal creada exitosamente.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la sucursal.' });
        console.log(error);
    }
}