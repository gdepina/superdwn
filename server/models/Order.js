import mongoose from 'mongoose';


const {Schema} = mongoose;

const orderStatus = {
    STARTED: 'Iniciada',
    PROCESSING: 'Procesando',
    DELIVERED: 'Enviada',
    COMPLETED: 'Completada'
}

const paymentTypes = {
    CASH: 'Efectivo',
    DEBIT: 'Tarjeta de debito',
    CREDIT: 'Tarjeta de credito'
}


const OrderItemSchema = new Schema({
        product: {
            type: Schema.ObjectId,
            ref: 'Product',
            required: 'Se requiere id del producto'
        },
        quantity: {
            type: Number,
            min: 1,
            max: 100,
            required: 'Se requiere cantidad'
        }
    },
    {_id: false, versionKey: false}
);

const OrderSchema = new Schema({
        user: {
            type: Schema.ObjectId,
            ref: 'User',
            required: 'El user es requerido'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        address: {
            type: String,
            trim: true,
            required: 'Se requiere una direccion'
        },
        status: {
            type: String,
            enum: Object.keys(orderStatus)
        },
        paymentType: {
            type: String,
            required: 'Se requiere un metodo de pago',
            enum: Object.keys(paymentTypes)
        },
        products: {
            type: [OrderItemSchema],
            validate: {
                validator: products => Boolean(products[0]),
                message: 'Se requiere enviar al menos 1 producto'
            }
        }
    },
    {versionKey: false}
);

const model = mongoose.model('Order', OrderSchema);


export default {
    orderStatus,
    paymentTypes,
    model
}