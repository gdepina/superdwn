import UserModel from "../models/User";


const login = (req, res) => {
    if (!req.body.password || !req.body.email) {
        return res.status(400).json({message: 'Debe proporcionar email y contraseña'});
    }
    UserModel.findOne({email: req.body.email})
        .then((user) => {
            if (user.password === req.body.password) {
                res.json({message: "logueado con exito", token: user._id, user});
            }
        })
        .catch((err) => {
            res.status(400).json({message: 'email o clave incorrectas'});
        });
};


// middlewares

const isLogged = (req, res, next) => {

    /* recibimos el _id de mongo como si fuera un token,
    tener en cuenta que mongo explota si le pasas un id incorrecto */

    const token = req.get('Authorization');

    UserModel.findOne({_id: token})
        .then((user) => {
            if (user) {
                req = Object.assign(req, {user: user._doc, token})
                return next()
            }
            res.status(403).json({message: 'se necesita proporcionar un token valido en la peticion'});
        })
        .catch((err) => {
            if (err) res.status(500).json({message: "internal server error", err})
        })
}


export default {
    login,
    isLogged,
};