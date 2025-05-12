import { model, Schema } from 'mongoose';
import { Types } from 'mongoose';

const esquemaMovimientoStock = new Schema({
    fecha: { type: Date, required: true },
    tipoMovimiento: { type: String, require: true}, //ingreso, egrego, transferencia
    esProducto: { type: Boolean, required: true}, //si no es producto será material
    cantidad: {type: Number, required: true},
    sucursalOrigenId: {
    type: Types.ObjectId,
    ref: 'Sucursal',
    default: null // puede ser null si es ingreso
  },
  sucursalDestinoId: {
    type: Types.ObjectId,
    ref: 'Sucursal',
    default: null // puede ser null si es egreso (Se usa default: null en los campos opcionales)
  },

  productoId: {
    type: Types.ObjectId,
    ref: 'Producto',
    default: null // solo si esProducto es true
  },
  materialId: {
    type: Types.ObjectId,
    ref: 'Material',
    default: null // solo si esProducto es false
  },
})
const MovimientoStock = model('MovimientoStock', esquemaMovimientoStock);
export default MovimientoStock;