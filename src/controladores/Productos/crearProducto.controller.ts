import Producto from "../../modelos/Producto";
import { Response, Request } from "express";

interface DatosProductos {
    tipoProducto: String,
    nombre: String,
    color: String,
    descripcion: String,
    precio: Number,
}

//función principal del controlador:
export const crearProducto = async (req: Request, res: Response) => {
    try {
        const { tipoProducto, nombre, color, descripcion, precio } = req.body as DatosProductos;
        //creo una nueva sucursal y la guardo en la DB con .save:
        const nuevoProducto = new Producto({
            tipoProducto,
            nombre,
            color,
            descripcion,
            precio,
        })
        await nuevoProducto.save();
        res.status(201).json({ message: 'Producto creado exitosamente.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el producto.' });
        console.log(error);
    }
}