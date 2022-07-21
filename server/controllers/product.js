import ProductModel from '../models/Product'

const create = (req, res) => {
    ProductModel.create(req.body, (err) => res.status(500).json(err))
    res.status(200);
}

const update = (req, res) => {
    ProductModel.findOneAndUpdate({ name: req.body.name }, req.body, (err) => res.status(500).json(err))
    res.status(200);
}

const destroyAss = () => {

}

export default {
    create,
    update,
    destroyAss
}
