import ProductModel from '../models/Product'

const create = (req, res) => {
    /*const product = new ProductModel(req.body);
    product.save((err) => {
        if (err) res.status(500).json(err);
        res.status(200).send("Esta todo bien pa!");
    })
     */
    ProductModel.create(req.body, (err) => res.status(500).json(err))
}

const update = () => {

}

const destroyAss = () => {

}

export default {
    create,
    update,
    destroyAss
}
