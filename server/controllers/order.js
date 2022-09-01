import { Order } from '../models/Order';

const list = (req, res) => {
  Order.find({ user: req.user._id }, { user: 0 })
    .sort('-createdAt')
    // .skip(0) pagination start row
    // .limit(10) pagination end row
    // .populate('user', '-_id -password')
    .populate('products.product', '-stock')
    .then((orders) => {
      res.json({ orders });
    });
};

const detail = (req, res) => {
  const { id } = req.params;
  Order.findOne({ _id: id, user: req.user._id })
    .populate('user', '-_id -password')
    .populate('products.product', '-stock')
    .then((orders) => res.json(orders));
};

const create = (req, res) => {
  const order = new Order(req.body);
  order.user = req.user._id; // logged user
  order.save((err, ord) => {
    if (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
    ord
      .populate('user', '-_id -password')
      .populate('products.product', '-stock')
      .execPopulate()
      .then((ordPopulated) => res.json({ message: 'orden creada con exito', order: ordPopulated }));
  });
};

export default {
  list,
  detail,
  create,
};
