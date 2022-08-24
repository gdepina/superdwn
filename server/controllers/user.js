import fs from 'fs';
import Formidable from 'formidable';
import UserModel from '../models/User';

const create = (req, res) => {
  const form = new Formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: 'Image could not be uploaded',
        err,
      });
    }
    const user = new UserModel(fields);
    if (files.avatar) {
      user.avatar.data = fs.readFileSync(files.avatar.path);
      user.avatar.contentType = files.avatar.type;
    }
    user.save((error, savedUser) => {
      if (error) {
        return res.status(400).json({
          message: 'internal server error',
          code: 'SERVER_ERROR',
          error,
        });
      }
      res.json({
        message: 'user created successfully',
        code: 'CREATED',
        savedUser,
      });
    });
  });
};

const find = (req, res) => {
  const token = req.get('Authorization');
  const { userName } = req.params;
  const query = {};
  // eslint-disable-next-line no-underscore-dangle
  userName ? (query.userName = userName) : (query._id = token);
  UserModel.findOne(query, { _id: 0, password: 0 }, (err, user) => {
    if (err) res.status(500).json({ message: 'internal server error' });
    !user ? res.status(404).json({ message: 'el usuario no existe' }) : res.json(user);
  });
};

export default {
  find,
  create,
};
