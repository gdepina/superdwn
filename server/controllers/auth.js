import UserModel from "../models/User";

const login = (req, res) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).send("Debe proporcionar usuario y contraseña");
  }
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (user.password === req.body.password) {
        res.send(user._id);
      }
    })
    .catch((err) => {
      res.status(400).send("Usuario o contraseña incorrectos");
    });
};

export default {
  login,
};
