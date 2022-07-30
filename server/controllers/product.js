import ProductModel from "../models/Product";

const list = (req, res) => {
  const { name, category } = req.query;

  let query = {};

  if (category) query.category = category
  if (name) query.name = {$regex: `(.*)${name}(.*)`}

  ProductModel.find(query)
      .then((products) => {
          res.status(200).json(products);
      })
      .catch((error) => {
          res.json(error);
      });
};





const create = (req, res) => {
  ProductModel.create(req.body, (err) => res.status(500).json(err));
  res.status(200);
};

const update = (req, res) => {
  ProductModel.findOneAndUpdate({ name: req.body.name }, req.body, (err) =>
    res.status(500).json(err)
  );
  res.status(200);
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
  destroyAss,
};
