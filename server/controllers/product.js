import ProductModel from '../models/Product'

const list = (req, res) => {
    //logic for get a list of all products from mongodb here
    const products = [
        {id: 1, name: 'computadora noganet'},
        {id: 2, name: 'mouse steelseries'},
        {id: 3, name: 'monitor benq'}
    ]
    res.send(products);
  };
  

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
    list,
    create,
    update,
    destroyAss
}
