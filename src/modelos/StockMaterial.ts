import { model, Schema } from 'mongoose';
import { Types } from 'mongoose';


const esquemaStockMaterial = new Schema({
    materialId: {
        type: Types.ObjectId,
        ref: 'Material',
        required: true,
    },
    sucursalId: {
        type: Types.ObjectId,
        ref: 'Sucursal',
        required: true,
    },
    cantidad: {type: Number},
});

const StockMaterial = model('StockMaterial', esquemaStockMaterial);

export default StockMaterial;

