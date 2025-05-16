import StockMaterial from "../../modelos/StockMaterial";
import { Request, Response } from "express";

export const eliminarStockMaterialPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const stock = await StockMaterial.findByIdAndDelete(id);
        if (!stock) {
            res.status(400).json({ error: 'Stock de material no encontrado.' });
            return;
        }
        res.status(200).json('Stock de material eliminado correctamente.');
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el stock del material.' });
        console.log(error);
    }
}


