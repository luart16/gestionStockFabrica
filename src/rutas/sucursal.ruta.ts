import { Router } from "express";
import { crearSucursal, traerTodasLasSucursales, eliminarSucursalPorId, modificarSucursalPorId, traerSucursalPorId } from "../controladores/Sucursales";

const sucursalRuta = Router();

sucursalRuta.post('/api/sucursal/crear', crearSucursal);
sucursalRuta.get('/api/sucursal/traerTodasLasSucursales', traerTodasLasSucursales);
sucursalRuta.delete('/api/sucursal/eliminarSucursal/:id', eliminarSucursalPorId);
sucursalRuta.put('/api/sucursal/modificarSucursal/:id', modificarSucursalPorId);
sucursalRuta.get('/api/sucursal/traerSucursalPorId/:id', traerSucursalPorId)

export default sucursalRuta;