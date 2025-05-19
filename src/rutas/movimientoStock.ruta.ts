import { Router } from "express";
import { crearMovimientoStock, traerMovimientoStockPorProducto, traerTodosLosMovimientosStock } from "../controladores/MovimientoStock";

const movimientoStockRuta = Router();

movimientoStockRuta.post('/api/movimientoStock/crear', crearMovimientoStock)
movimientoStockRuta.get('/api/movimientoStock/traerMovimientoStock/:productoId', traerMovimientoStockPorProducto,)
movimientoStockRuta.get('/api/movimientoStock/traerTodosLosMovimientosStock/', traerTodosLosMovimientosStock)

export default movimientoStockRuta;