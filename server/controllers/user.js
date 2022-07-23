import UserModel from '../models/User'

const create = (req, res) => {
    UserModel.create(req.body, (err) => res.status(500).json(err))
    res.status(200);
}

export default {
    create,
    
}