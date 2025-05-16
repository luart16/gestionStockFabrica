import StockMaterial from "../../modelos/StockMaterial";
import { Request, Response } from "express";

export const traerTodosLosStockMateriales = async (req: Request, res: Response) => {
    try {
        const stockMateriales = await StockMaterial.find();
        if (stockMateriales.length === 0) {
            res.status(404).json({ error: ('No hay stock registrado.') });
            return;
        }
        const todosLosStockMateriales = stockMateriales.map(stock => ({
            _id: stock._id,
            materialID: stock.materialId,
            sucursalId: stock.sucursalId,
            cantidad: stock.cantidad,
            enStock: stock.enStock,
        }));
        res.status(200).json(todosLosStockMateriales);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer stock.' });
        console.log(error);
    }
}




