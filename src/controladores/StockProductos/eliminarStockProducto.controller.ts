 import StockProducto from "../../modelos/StockProducto";
 import { Request, Response } from "express";

 export const eliminarStockProductoPorId = async (req: Request, res: Response) => {
     try{
         const id = req.params.id; 
         const stock = await StockProducto.findByIdAndDelete(id); 
         if (!stock) {
             res.status(400).json({ error: 'Stock de producto no encontrado.'});
            return;
         }
         res.status(200).json('Stock de producto eliminado correctamente.');
     }
     catch(error){
         res.status(500).json({ error: 'Error al eliminar el stock del producto.'});
         console.log(error);
     }
 }


