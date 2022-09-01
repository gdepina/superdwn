import mongoose from 'mongoose';

const { Schema } = mongoose;

export const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'El nombre es requerido',
  },
  category: {
    type: String,
    trim: true,
    required: 'La categoria es requerida',
  },
  desc: {
    type: String,
    trim: true,
    required: 'La descripcion es requerida',
  },
  price: {
    type: Number,
    trim: true,
    required: 'El precio es requerido',
  },
  discount_percentage: {
    type: Number,
    trim: true,
  },
  discount_price_fixed: {
    type: Number,
    trim: true,
  },
  stock: {
    type: Number,
    trim: true,
    required: 'El stock es requerido',
  },
  img: {
    type: String,
  },
});

ProductSchema.pre('save', function (next) {
  const { discount_percentage: percentage, price } = this;
  if (percentage) {
    this.discount_price_fixed = (price - (price * percentage) / 100).toFixed(2);
  }
  next();
});

export const ProductModel = mongoose.model('Product', ProductSchema);
