import { Router } from "express";
import { crearStockProducto, traerTodosLosStockProductos, traerStockProductoPorId, eliminarStockProductoPorId, modificarStockProductoPorId, } from "../controladores/StockProductos";

const stockProductoRuta = Router();

stockProductoRuta.post('/api/stockProducto/crear', crearStockProducto);
stockProductoRuta.get('/api/stockProducto/traerTodosLosStockProductos', traerTodosLosStockProductos);
stockProductoRuta.get('/api/stockProducto/traerStockProductoPorId/:id', traerStockProductoPorId);
stockProductoRuta.delete('/api/stockProducto/eliminarStockProductoPorId/:id', eliminarStockProductoPorId);
stockProductoRuta.put('/api/stockProducto/modificarStockProductoPorId/:id', modificarStockProductoPorId);

export default stockProductoRuta;