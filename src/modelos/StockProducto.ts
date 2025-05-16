import { model, Schema } from 'mongoose';
import { Types } from 'mongoose';

const esquemaStockProducto = new Schema({
    productoId: {
        type: Types.ObjectId,
        ref: 'Producto',
        required: true,
    },
    sucursalId: {
        type: Types.ObjectId,
        ref: 'Sucursal',
        required: true,
    },
    cantidad: { 
        type: Number,
        required: true,
        min: 0 //puede ser 0 si no hay stock
     },
    enStock: { type: Boolean },
})

const StockProducto = model('StockProducto', esquemaStockProducto);

export default StockProducto;