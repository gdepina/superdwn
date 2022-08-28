import Formidable from 'formidable';
import fs from 'fs';
import ProductModel from '../models/Product';

const list = (req, res) => {
  const { name, category } = req.query;

  const query = {};

  if (category) query.category = category;
  if (name) query.name = { $regex: `(.*)${name}(.*)`, $options: 'i' };

  ProductModel.find(query)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.json(error);
    });
};

const detail = (req, res) => {
  const { id } = req.params;
  ProductModel.findOne({ _id: id })
    .then((orders) => res.json(orders))
    .catch((error) => res.status(500).json({ message: 'internal server error', error }));
};

const create = (req, res) => {
  const form = new Formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: 'Image could not be uploaded',
      });
    }
    const product = new ProductModel(fields);
    if (files.img) {
      product.img.data = fs.readFileSync(files.img.path);
      product.img.contentType = files.img.type;
    }
    product.save((error, result) => {
      if (error) {
        return res.status(400).json(error);
      }
      res.json(result);
    });
  });
};

const update = (req, res) => {
  // eslint-disable-next-line max-len
  ProductModel.findOneAndUpdate({ name: req.body.name }, req.body, (err) => res.status(500).json(err));
  res.status(200);
};

const categories = (req, res) => {
  ProductModel.distinct('category', (err, result) => {
    err && res.status(500).json(err);
    res.status(200).json(result);
  });
};

const destroyAss = (req, res) => {
  ProductModel.findOneAndRemove({ name: req.body.name }, (err) => res.status(500).json(err));
  res.status(200);
};

export default {
  list,
  detail,
  create,
  update,
  categories,
  destroyAss,
};
