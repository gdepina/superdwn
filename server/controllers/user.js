import UserModel from '../models/User'
import Formidable from "formidable";
import fs from "fs";


const create = (req, res) => {
    let form = new Formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                message: "Image could not be uploaded"
            })
        }
        let user = new UserModel(fields)
        if(files.avatar){
            user.avatar.data = fs.readFileSync(files.avatar.path)
            user.avatar.contentType = files.avatar.type
        }
        console.log(files)
        user.save((err, user) => {
            if (err) {
                return res.status(400).json(err)
            }
            res.json({
                message: "user created successfully",
                user: user
            })
        })
    })
};

const find = (req, res) => {
    const token = req.get('Authorization');
    const userName = req.params.userName
    let query = {}
    userName ? query.userName = userName : query._id = token
    UserModel.findOne(query, {_id:0, password: 0}, (err, user) => {
        if (err) res.status(500).json({message: "internal server error"})
        !user ? res.status(404).json({message: "el usuario no existe"}) : res.json(user)
    })
}


export default {
    find,
    create,
}