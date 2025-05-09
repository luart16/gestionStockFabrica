import { model, Schema } from 'mongoose';

const esquemaSucursal = new Schema({
    nombreSucursal: { type: String, required: true },
    direccion: { type: String},
    telefono: { type: String},
})

const Sucursal = model ('Sucursal', esquemaSucursal);

export default Sucursal;