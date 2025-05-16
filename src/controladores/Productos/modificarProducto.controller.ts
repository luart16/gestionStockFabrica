import Producto from "../../modelos/Producto";
import { Request, Response } from "express";

export const modificarProductoPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { tipoProducto, nombre, color, descripcion, precio } = req.body;
        const producto = await Producto.findById(id);
        if (!producto) {
            res.status(400).json({ error: 'Producto no encontrado.' });
            return;
        }
        //Actualiza solo los campos proporcionados:
        if (tipoProducto) {
            producto.tipoProducto = tipoProducto;
        }
        if (nombre) {
            producto.nombre = nombre;
        }
        if (color) {
            producto.color = color;
        }
        if (descripcion) {
            producto.descripcion = descripcion;
        }
        if (precio) {
            producto.precio = precio;
        }

        const productoModificado = await producto.save();
        res.status(200).json(productoModificado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al modificar el producto.' })
    }
}


