import { Router } from "express";
import { crearStockMaterial, traerStockMaterialPorId, traerTodosLosStockMateriales, modificarStockMaterialPorId, eliminarStockMaterialPorId } from "../controladores/StockMateriales";


const stockMaterialRuta = Router();

stockMaterialRuta.post('/api/stockMaterial/crear', crearStockMaterial);
stockMaterialRuta.get('/api/producto/traerTodosLosStockMateriales', traerTodosLosStockMateriales);
stockMaterialRuta.delete('/api/producto/eliminarStockMaterial/:id', eliminarStockMaterialPorId);
stockMaterialRuta.put('/api/stockMaterial/modificarStockMaterial/:id', modificarStockMaterialPorId);
stockMaterialRuta.get('/api/producto/traerStockMaterialPorId/:id', traerStockMaterialPorId);

export default stockMaterialRuta;