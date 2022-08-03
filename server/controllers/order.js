import Order from "../models/Order";


const list = (req, res) => {
    Order.model
        .find({user: req.user._id}, {user: 0})
        .sort('-createdAt')
        //.skip(0) pagination start row
        //.limit(10) pagination end row
        //.populate('user', '-_id -password')
        .populate('products.product', '-stock')
        .then(orders => {
            res.json({orders})
        });
}

const detail = (req, res) => {
    const id = req.params.id
    Order.model
        .findOne({_id: id, user: req.user._id})
        .populate('user', '-_id -password')
        .populate('products.product', '-stock')
        .then(orders => res.json(orders));
}

const create = (req, res) => {
    const order = new Order.model(req.body);
    order.user = req.user._id; //logged user
    order.save((err, result) => {
        if (err) {
            return res.status(500).json({message: "internal server error", err})
        }
        result
            .populate('user', '-_id -password')
            .populate('products.product', '-stock')
            .execPopulate()
            .then(result => res.json({message: "orden creada con exito", result}));
    });
}

export default {
    list,
    detail,
    create
}