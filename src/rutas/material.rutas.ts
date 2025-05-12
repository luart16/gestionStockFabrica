import { Router } from "express";
import { crearMaterial, traerMaterialPorId, traerTodosLosMateriales, eliminarMaterialPorId, modificarMaterialPorId } from "../controladores/Materiales";

const materialRuta = Router();

materialRuta.post('/api/material/crear', crearMaterial) //creo una ruta, que es la que me va a dirigir a crear un usuario.
materialRuta.get('/api/material/traerMaterialPorId/:id', traerMaterialPorId);
materialRuta.get('/api/material/traerTodosLosMateriales', traerTodosLosMateriales);
materialRuta.delete('/api/material/eliminarMaterial/:id', eliminarMaterialPorId);
materialRuta.put('/api/material/modificarMaterial/:id', modificarMaterialPorId);

export default materialRuta;