import StockMaterial from "../../modelos/StockMaterial";
import { Response, Request } from "express";

interface DatosStockMaterial {
    materialId: String
    sucursalId: String
    cantidad: Number
    enStock: Boolean
}

//función principal del controlador:
export const crearStockMaterial = async (req: Request, res:Response) => {
    try{
        const { materialId, sucursalId, cantidad, enStock } = req.body as DatosStockMaterial;
        //creo un nuevo stock y lo guardo en la DB con .save:
        const nuevoStockMaterial = new StockMaterial ({
            materialId,
            sucursalId,
            cantidad,
            enStock,
        })
        await nuevoStockMaterial.save()
        res.status(201).json({message: 'Stock creado exitosamente.'});
    }
    catch(error){
        res.status(500).json({error: 'Error al crear el stock.'});
        console.log(error);
    }
}