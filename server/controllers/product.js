import ProductModel from "../models/Product";
import Formidable from "formidable";
import fs from "fs";

const list = (req, res) => {
    //logic for get a list of all products from mongodb here
    const products = [
        { id: 1, name: "computadora noganet" },
        { id: 2, name: "mouse steelseries" },
        { id: 3, name: "monitor benq" },
    ];
    res.send(products);
};

const create = (req, res) => {
    let form = new Formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                message: "Image could not be uploaded"
            })
        }
        let product = new ProductModel(fields)
        if(files.img){
            product.img.data = fs.readFileSync(files.img.path)
            product.img.contentType = files.img.type
        }
        product.save((err, result) => {
            if (err) {
                return res.status(400).json(err)
            }
            res.json(result)
        })
    })
};

const update = (req, res) => {
    ProductModel.findOneAndUpdate({ name: req.body.name }, req.body, (err) =>
        res.status(500).json(err)
    );
    res.status(200);
};

const categories = (req, res) => {
    ProductModel.distinct("category", (err, result) => {
        err && res.status(500).json(err);
        res.status(200).json(result);
    });
};

const destroyAss = (req, res) => {
    ProductModel.findOneAndRemove({ name: req.body.name }, (err) =>
        res.status(500).json(err)
    );
    res.status(200);
};

export default {
    list,
    create,
    update,
    categories,
    destroyAss,
};
