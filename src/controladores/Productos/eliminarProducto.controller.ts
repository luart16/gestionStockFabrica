import Producto from "../../modelos/Producto";
import { Request, Response } from "express";

export const eliminarProductoPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id; //Obtiene el id del producto desde la URL (Ejemplo: si la URL es DELETE /productos/123, entonces id = "123")
        const producto = await Producto.findByIdAndDelete(id); //Busca el producto con ese id, lo elimina de la BD y guarda el producto eliminado en esa variable
        if (!producto) {
            res.status(400).json({ error: 'Producto no encontrado.' });
            return;
        }
        res.status(200).json('Producto eliminado correctamente.');
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto.' });
        console.log(error);
    }
}


