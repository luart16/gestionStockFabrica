import MovimientoStock from "../../modelos/MovimientoStock";
import { Response, Request } from "express";

export const traerTodosLosMovimientosStock = async (req: Request, res: Response) => {
    try {
        const movimientos = await MovimientoStock.find();
        if (movimientos.length === 0) {
            res.status(404).json({ error: 'No hay movimientos registrados.' });
            return;
        }
        const todosLosMovimientos = movimientos.map(movimiento => ({
            _id: movimiento._id,
            fecha: movimiento.fecha,
            tipo: movimiento.tipo,
            esProducto: movimiento.esProducto,
            cantidad: movimiento.cantidad,
            sucursalOrigen: movimiento.sucursalOrigenId,
            sucursalDestino: movimiento.sucursalDestinoId,
            productoId: movimiento.productoId,
            materialId: movimiento.materialId
        }));
        res.status(200).json(todosLosMovimientos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer los movimientos de stock.' })
        console.log(error);
    }
}



