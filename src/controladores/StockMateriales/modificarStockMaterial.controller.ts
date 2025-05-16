import StockMaterial from "../../modelos/StockMaterial";
import { Request, Response } from "express";

export const modificarStockMaterialPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { cantidad, enStock } = req.body;
        const stock = await StockMaterial.findById(id);
        if (!stock) {
            res.status(400).json({ error: 'Stock de material no encontrado.' });
            return;
        }
        //Actualiza solo los campos proporcionados:
        if (cantidad) {
            stock.cantidad = cantidad;
        }
        if (typeof enStock !== 'undefined') { //con el typeof puedo tomar el valor aunque sea falso
            stock.enStock = enStock;
        }
        const stockModificado = await stock.save();
        res.status(200).json(stockModificado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al modificar el stock de material.' })
    }
}
