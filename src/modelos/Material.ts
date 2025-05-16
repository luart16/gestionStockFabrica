import { model, Schema } from "mongoose";

const esquemaMaterial = new Schema({
    nombreMaterial: { type: String, required: true },
    color: { type: String },
    descripcion: { type: String },
    unidadDeMedida: { type: String },
    precio: { type: Number },
})

const Material = model('Material', esquemaMaterial);

export default Material;
