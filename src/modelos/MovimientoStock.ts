import { model, Schema } from 'mongoose';
import { Types } from 'mongoose';

const esquemaMovimientoStock = new Schema({
  fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
  tipo: {
    type: String,
    enum: ['ingreso', 'egreso', 'transferencia'],
    required: true
  },
  esProducto: {
    type: Boolean,
    required: true
  },
  cantidad: {
    type: Number,
    required: true,
    min: 1 //debe moverse al menos 1 unidad
  },
  sucursalOrigenId: {
    type: Types.ObjectId,
    ref: 'Sucursal'
    // NOT required directamente, se valida en controlador según tipo
  },
  sucursalDestinoId: {
    type: Types.ObjectId,
    ref: 'Sucursal'
    // NOT required directamente, se valida en controlador según tipo
  },
  productoId: {
    type: Types.ObjectId,
    ref: 'Producto'
    // NOT required directamente, se valida si esProducto === true
  },
  materialId: {
    type: Types.ObjectId,
    ref: 'Material'
    // NOT required directamente, se valida si esProducto === false
  }
});

const MovimientoStock = model('MovimientoStock', esquemaMovimientoStock);

export default MovimientoStock;