import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'El nombre es requerido'
  },
  category:  String,
  desc: String,
  price: Number,
  discount_percentage:  Number,
  discount_price_fixed: Number,
  stock: Number,
  img: String,
});

const Product = mongoose.model('Product', schema);


export default Product;