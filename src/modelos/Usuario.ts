import { model, Schema } from 'mongoose' //1°: importo de mongoose las herramientas necesarias para crear un modelo y esquema
//mongoose es una librería de Node.js que nos permite trabajar con bases de datos MongoDB de forma más ordenada y segura
/* -Schema: me permite definir cómo debe ser cada documento en la base de datos.
   -model: crea el modelo a partir del esquema, y es lo que se usa para leer, escribir, eliminar o actualizar datos. */

//2°:Creo el esquema del usuario: (Es como decir: "cada usuario que se guarde en la base de datos debe tener estas características obligatorias.")
const esquemaUsuario = new Schema({
   nombreUsuario: { type: String, required: true, unique: true },
   email: { type: String, required: true, unique: true },
   contrasenia: { type: String, required: true },
   rol: { type: String, required: true, enum: ['administrador', 'vendedor'] }
});

//3°: Creo el modelo Mongoose llamado 'Usuario', basado en el esquema que definí arriba:
const Usuario = model('Usuario', esquemaUsuario); //esto luego me va a permitir por ej crear usuario poniendo Usuario.create({...})

export default Usuario; //exporto el modelo para poder usarlo en otras partes de la app.