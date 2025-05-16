import { Router } from "express";
import { crearProducto, traerTodosLosProductos, eliminarProductoPorId, modificarProductoPorId, traerProductoPorId } from "../controladores/Productos";


const productoRuta = Router();

productoRuta.post('/api/producto/crear', crearProducto);
productoRuta.get('/api/producto/traerTodosLosProductos', traerTodosLosProductos);
productoRuta.delete('/api/producto/eliminarProducto/:id', eliminarProductoPorId);
productoRuta.put('/api/producto/modificarProducto/:id', modificarProductoPorId);
productoRuta.get('/api/producto/traerProductoPorId/:id', traerProductoPorId);

export default productoRuta;