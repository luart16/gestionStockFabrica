import express from 'express';
import cors from 'cors';
import { conectarDB } from './BaseDeDatos/database';
import usuarioRuta from './rutas/usuario.rutas';
import materialRuta from './rutas/material.rutas';
import sucursalRuta from './rutas/sucursal.ruta';

const app = express(); //le digo que la app use express
const PORT = 3000; //le digo que use el puerto 3000
app.use(cors());
app.use(express.json());
app.use(usuarioRuta, materialRuta, sucursalRuta)


app.listen(PORT, function () {
    console.log('Servidor en el puerto', PORT);
    conectarDB();
})