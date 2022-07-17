import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import request from 'request'
import config from './../../config/config'


const create = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.status(200).json({
            message: "Successfully signed up!"
        })
    })
}

/**
 * Load user and append to req.
 */
const userByID = (req, res, next, id) => {
    const userId = id || req.auth._id;
    User.findById(userId).exec((err, user) => {
        if (err || !user)
            return res.status('400').json({
                error: "User not found"
            })
        req.profile = user
        next()
    })
}

/**
 * Load user and append to req.
 */
const userByAuthId = (req, res, next) => {
    const userId = req.auth._id;
    User.findById(userId).exec((err, user) => {
        if (err || !user)
            return res.status('400').json({
                error: "User not found"
            })
        req.logged = user
        next()
    })
}


const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const list = (req, res) => {
    User.find({employee: false}, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(users)
    }).select('name email updated created')
}

const listEmployee = (req, res) => {
    User.find({employee: true, cuil: {$exists: true}}, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(users)
    }).select('cuil cbu name')
}

const update = (req, res, next) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    })
}

const remove = (req, res, next) => {
    let user = req.profile
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    })
}

const isSeller = (req, res, next) => {
    const isSeller = req.profile && req.profile.seller
    if (!isSeller) {
        return res.status('403').json({
            error: "User is not a seller"
        })
    }
    next()
}

const createCharge = (req, res, next) => {
    next();
}

export default {
    create,
    userByID,
    userByAuthId,
    read,
    list,
    remove,
    update,
    isSeller,
    createCharge,
    listEmployee
}
