import { model, Schema } from 'mongoose' //par  que use ese modelo y esquema

const esquemaUsuario = new Schema({
    nombreUsuario: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    contrasenia: { type: String, required: true },
    rol: { type: String, require: true, enum: ['administrador', 'vendedor'] }
});

const Usuario = model('Usuario', esquemaUsuario);

export default Usuario;