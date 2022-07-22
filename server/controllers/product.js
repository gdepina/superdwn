import ProductModel from "../models/Product";

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
