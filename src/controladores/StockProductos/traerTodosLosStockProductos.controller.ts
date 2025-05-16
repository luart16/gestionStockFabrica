import StockProducto from "../../modelos/StockProducto";
import { Request, Response } from "express";

export const traerTodosLosStockProductos = async (req: Request, res: Response) => {
    try {
        const stockProductos = await StockProducto.find();
        if (stockProductos.length === 0) {
            res.status(404).json({ error: ('No hay stock registrado.') });
            return;
        }
        const todosLosStockProductos = stockProductos.map(stock => ({
            _id: stock._id,
            productoId: stock.productoId,
            sucursalId: stock.sucursalId,
            cantidad: stock.cantidad,
            enStock: stock.enStock,
        }));
        res.status(200).json(todosLosStockProductos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer stock.' })
        console.log(error);
    }
}

