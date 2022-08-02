import OrderModel from '../models/Order'

const create = (req, res) => {
    OrderModel.create(req.body, (err, order) => {
        err ? res.status(500).json({message: 'internal server error', error: err}) : res.json(order)
    })
};

export default {
    create,
};