import UserModel from '../models/User'

const create = (req, res) => {
    UserModel.create(req.body, (err) => res.status(500).json(err))
    res.status(200);
}

const find = (req, res) => {
    const userName = req.params.userName
    UserModel.findOne({userName}, ['name', 'surname', 'email'], (err, user) => {
        if (err) res.json(err)
        !user ? res.status(404).send('no existe el usuario') : res.json(user)
    })
}


export default {
    find,
    create,
}