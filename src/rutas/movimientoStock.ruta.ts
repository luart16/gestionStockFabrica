import { Router } from "express";
import { crearMovimientoStock } from "../controladores/MovimientoStock";

const movimientoStockRuta = Router();

movimientoStockRuta.post('/api/movimientoStock/crear', crearMovimientoStock )

export default movimientoStockRuta;