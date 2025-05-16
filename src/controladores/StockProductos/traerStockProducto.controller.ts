import { error } from "console";
import StockProducto from "../../modelos/StockProducto";
import { Request, Response } from "express";

export const traerStockProductoPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const stockProducto = await StockProducto.findById(id);
        if (!stockProducto){
            res.status(400).json({ error: 'Stock de producto no encontrado.'});
            return;
        }
        res.status(200).json({
            _id: stockProducto.id,
            productoId: stockProducto.productoId,
            sucursalId: stockProducto.sucursalId,
            cantidad: stockProducto.cantidad,
            enStock: stockProducto.enStock,
        })//esto también podría pasarlo directamente así: res.status(200).json(stockProducto);
    }
    catch (error){
        res.status(500).json({ error: 'Error al traer el stock de producto por id.'});
    }
}


