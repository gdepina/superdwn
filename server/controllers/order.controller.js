import {Order, CartItem} from '../models/order.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import request from 'request'

const ESTABLISHMENT = 6;
const ESTABLISHMENTCBU = "1234567891011316209650";

const create = (req, res, next) => {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order)
    order.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        req.order = result;
        next();
        //res.status(200).json(result)
    })
}

const processCredit = (card, req, res, next) => {
    const url = 'http://paypauli.herokuapp.com/api/txn';

    const body = {
        tarjeta: card.cardNumber.replace(/\s+/g, ''),
        idEstablecimiento: ESTABLISHMENT,
        nroComprobante: Math.floor(Math.random() * 999999),
        detalleTransaccion: `Supermerk2 Order:${req.order._id}`,
        importeTotal: req.order.amount,
        cuotas: card.cuotes,
        cvc: card.cvc,
    }

    request({
        url: encodeURI(url),
        method: "POST",
        json: true,
        body: body,
    }, (error, response, body) => {
        //update user
        if (body.statusCode > 300) {
            return res.status('400').json({
                error: body && body.message || "Ocurrio un error al procesar tu pago, reintenta mas tarde."
            })
        }
        req.paypauliTransaction = body.transaccion;
        next()
    })
}

const processPayment = (req, res, next) => {
    const card = req.body.card;

    if (req.order.payment_method === 'Credito') {
            processCredit(card, req, res, next);
    } else if (req.order.payment_method === 'Efectivo') {
        next()
    } else {
        processDebit(card, req, res, next);
    }
}


const processDebit = (card, req, res, next) => {
    const url = 'https://bank-back.herokuapp.com/api/v1/public/debitar';
    const splittedExpiry = card.expiry.replace(/\s+/g, '').split("/");
    const month = +splittedExpiry[0]-1;
    const year = `20${splittedExpiry[1]}`;

    const body = {
        numeroTarjeta: card.cardNumber.replace(/\s+/g, ''),
        cbuEstablecimiento: ESTABLISHMENTCBU,
        fechaVencimiento: new Date(year, month.toString()),
        descripcion: `Supermerk2 Order:${req.order._id}`,
        monto: req.order.amount,
        codigoSeguridad: card.cvc,
    }

    request({
        url: encodeURI(url),
        method: "POST",
        json: true,
        body: body,
    }, (error, response, body) => {
        //update user
        if (response && response.statusCode > 300) {
            return res.status('400').json({
                error: body.message
            })
        }
        //req.paypauliTransaction = body.transaccion;
        next()
    })
}


const listByShop = (req, res) => {
    Order.find({"products.shop": req.shop._id})
        .populate({path: 'products.product', select: '_id name price'})
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(orders)
        })
}

const update = (req, res) => {
    Order.update({'products._id': req.body.cartItemId}, {
        '$set': {
            'products.$.status': req.body.status
        }
    }, (err, order) => {
        if (err) {
            return res.status(400).send({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(order)
    })
}

const updateById = (req, res) => {
    Order.update({'_id': req.order._id}, {
        '$set': {
            'payment_id': req.paypauliTransaction,
            'payment_status': 'Pagado'
        }
    }, (err, order) => {
        if (err) {
            return res.status(400).send({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(req.order)
    })
}

const getStatusValues = (req, res) => {
    res.json(CartItem.schema.path('status').enumValues)
}

const orderByID = (req, res, next, id) => {
    Order.findById(id).populate('products.product', 'name price').populate('products.shop', 'name').exec((err, order) => {
        if (err || !order)
            return res.status('400').json({
                error: "Order not found"
            })
        req.order = order
        next()
    })
}

const listByUser = (req, res) => {
    Order.find({"user": req.profile._id})
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(orders)
        })
}

const read = (req, res) => {
    return res.json(req.order)
}

const listAmounts = (req, res) => {
    Order.aggregate([
        {
            $group: {
                _id: { month: { $month: "$date" }, payment_method: "$payment_method", payment_status: "$payment_status"  },
                totalPrice: {
                    $sum: "$amount"
                }
            }
        }
    ])
        .exec((err, metrics) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(metrics)
        })
}


export default {
    create,
    listByShop,
    update,
    getStatusValues,
    orderByID,
    listByUser,
    read,
    processPayment,
    updateById,
    listAmounts,
}
