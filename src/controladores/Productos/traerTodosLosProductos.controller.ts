import Producto from "../../modelos/Producto";
import { Response, Request } from "express";

export const traerTodosLosProductos = async (req: Request, res: Response) => {
    try {
        const productos = await Producto.find();
        if (productos.length === 0) {
            res.status(404).json({ error: 'No hay materiales registrados.' });
            return;
        }
        const todosLosProductos = productos.map(producto => ({
            _id: producto._id,
            tipoProducto: producto.tipoProducto,
            nombre: producto.nombre,
            color: producto.color,
            descripcion: producto.descripcion,
            precio: producto.precio,
        }));
        res.status(200).json(todosLosProductos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer los productos.' })
        console.log(error);
    }
}



