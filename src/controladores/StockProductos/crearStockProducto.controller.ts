import StockProducto from "../../modelos/StockProducto";
import { Response, Request } from "express";

interface DatosStockProducto {
    productoId: String
    sucursalId: String
    cantidad: Number
    enStock: Boolean
}

//función principal del controlador:
export const crearStockProducto = async (req: Request, res:Response) => {
    try{
        const { productoId, sucursalId, cantidad, enStock } = req.body as DatosStockProducto;
        //creo un nuevo stock y lo guardo en la DB con .save:
        const nuevoStockProducto = new StockProducto ({
            productoId,
            sucursalId,
            cantidad,
            enStock,
        })
        await nuevoStockProducto.save()
        res.status(201).json({message: 'Stock creado exitosamente.'});
    }
    catch(error){
        res.status(500).json({error: 'Error al crear el stock.'});
        console.log(error);
    }
}