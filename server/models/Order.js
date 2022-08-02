import mongoose from 'mongoose';


const {Schema} = mongoose;

const schema = new Schema({
    user: {
        type: String,
        trim: true,
        required: 'El username es requerido',
    },
    products: {
        type: [String],
        trim: true,
        validate: {
            validator: (products) => {
                if (products.length !== 0) return true
                return false
            },
            message: 'Es necesario proporcionar array con productos'
        }
    },
    status: {
        type: String,
        default: 'iniciado',
        required: 'Se requiere status del pedido'
    },
    payment: {
        type: String,
        default: "contado",
        trim: true,
        required: 'Se requiere un metodo de pago para el pedido'
    }
})


const Order = mongoose.model('Order', schema);


export default Order;
