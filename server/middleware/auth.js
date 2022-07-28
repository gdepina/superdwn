import UserModel from '../models/User'


const isLogged = (req, res, next) => {

    /* recibimos el _id de mongo como si fuera un token, 
    tener en cuenta que mongo explota si le pasas un id incorrecto */

    const token = req.get('Autorization');

    UserModel.findOne({ _id: token })
        .then((user) => {
            if (user) next()
            res.status(403).json('no tenes permisos');
        })
        .catch((err) => {
            res.status(500).json({
                message: "el token es incorrecto",
                error: err
            });
        })
}


export default isLogged