import {model, Schema } from 'mongoose';

const esquemaProducto = new Schema({
    tipoProducto: { type: String, required: true},
    nombre: { type: String, required: true},
    color: { type: String, required: true},
    descripcion: { type: String},
    precio: { type: Number},
})

const Producto = model('Producto', esquemaProducto);

export default Producto;