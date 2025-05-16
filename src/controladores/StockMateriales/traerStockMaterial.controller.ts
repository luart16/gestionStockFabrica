import StockMaterial from "../../modelos/StockMaterial";
import { Request, Response } from "express";

export const traerStockMaterialPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const stockMaterial = await StockMaterial.findById(id);
        if (!stockMaterial) {
            res.status(400).json({ error: 'Stock de producto no encontrado' });
            return;
        }
        res.status(200).json({
            _id: stockMaterial.id,
            materialId: stockMaterial.materialId,
            sucursalId: stockMaterial.sucursalId,
            cantidad: stockMaterial.cantidad,
            enStock: stockMaterial.enStock,
        });//esto también podría pasarlo directamente así: res.status(200).json(stockMaterial)
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer el stock de material por id.' });
    }
}





