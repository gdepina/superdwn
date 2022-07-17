import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import {create} from './../order/api-order.js'
import {Redirect} from 'react-router-dom'
import CreditCardInput from 'react-credit-card-input';
import TextField from "material-ui/TextField/TextField";
import MenuItem from "material-ui/Menu/MenuItem";
import {ListItem} from "material-ui";
import {cancelProduct, processCharge, update} from "./../order/api-order";

const styles = theme => ({
    subheading: {
        color: 'rgba(88, 114, 128, 0.87)',
        marginTop: "20px",
    },
    checkout: {
        float: 'right',
        margin: '20px 30px'
    },
    error: {
        display: 'inline',
        padding: "0px 10px"
    },
    errorIcon: {
        verticalAlign: 'middle'
    },
    textField: {
        width: '160px',
        marginRight: '16px'
    },
})

class PlaceOrder extends Component {
    state = {
        order: {},
        error: '',
        redirect: false,
        cardNumber: null,
        expiry: null,
        cvc: null,
        showCard: false,
        cuotes: '1',
        paymentMethod: 'Efectivo',
        paymentMethods: [
            'Credito',
            'Debito',
            'Efectivo'
        ],
        couteTypes: ['1','3', '6', '12']
    }

    placeOrder = () => {
        const card = {
            cardNumber: this.state.cardNumber,
            cvc: this.state.cvc,
            expiry: this.state.expiry,
            cuotes: this.state.cuotes || 1,
        }
        const total = this.props.checkoutDetails.products && this.props.checkoutDetails.products.reduce((a, b) => {
            return a + (b.quantity * b.product.price)
        }, 0);

        const jwt = auth.isAuthenticated();
        create({userId: jwt.user._id}, {
            t: jwt.token
        }, {
            ...this.props.checkoutDetails,
            payment_method: this.state.paymentMethod,
            amount: total
        }, card).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                cart.emptyCart(() => {
                    this.setState({'orderId': data._id, 'redirect': true})
                })
            }
        })
    }

    handleCardNumberChange = (e) => {
        this.setState({cardNumber: e.target.value})
    }

    handleCardExpiryChange = (e) => {
        this.setState({expiry: e.target.value})
    }

    handleCardCVCChange = (e) => {
        this.setState({cvc: e.target.value})
    }

    handleCuoteChange = (e) => {
        this.setState({cuotes: e.target.value})
    }

    handlePaymentChange = event => {
        if (event.target.value === 'Credito' || event.target.value === 'Debito') {
            this.setState({showCard: true, paymentMethod: event.target.value})
        } else {
            this.setState({showCard: false, paymentMethod: event.target.value})
        }
    }


    render() {
        const {classes} = this.props
        if (this.state.redirect) {
            return (<Redirect to={'/order/' + this.state.orderId}/>)
        }
        return (
            <span>
      <Typography type="subheading" component="h3" className={classes.subheading}>
        Metodos de pago
      </Typography>
        <TextField
            id="select-status"
            select
            value={this.state.paymentMethod}
            className={classes.textField}
            onChange={this.handlePaymentChange}
            SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
            }}
            margin="normal"
        >
        {this.state.paymentMethods.map(option => (
            <MenuItem key={option} value={option}>
                {option}
            </MenuItem>
        ))}
        </TextField>
                {this.state.paymentMethod === 'Credito' &&
                    <span>
                <Typography type="subheading" component="h3" className={classes.subheading}>
                  Cuotas
                 </Typography>
                <TextField
                    id="select-cuotes"
                    select
                    value={this.state.cuotes}
                    className={classes.textField}
                    onChange={this.handleCuoteChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                        {this.state.couteTypes.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                </TextField></span>}
                {this.state.showCard && <CreditCardInput
                    cardNumberInputProps={{value: this.state.cardNumber, onChange: this.handleCardNumberChange}}
                    cardExpiryInputProps={{value: this.state.expiry, onChange: this.handleCardExpiryChange}}
                    cardCVCInputProps={{value: this.state.cvc, onChange: this.handleCardCVCChange}}
                    fieldClassName="input"
                    customTextLabels={{
                        invalidCardNumber: 'El número de la tarjeta es inválido',
                        expiryError: {
                            invalidExpiryDate: 'La fecha de expiración es inválida',
                            monthOutOfRange: 'El mes de expiración debe estar entre 01 y 12',
                            yearOutOfRange: 'El año de expiración no puede estar en el pasado',
                            dateOutOfRange: 'La fecha de expiración no puede estar en el pasado'
                        },
                        invalidCvc: 'El código de seguridad es inválido',
                        invalidZipCode: 'El código postal es inválido',
                        cardNumberPlaceholder: 'Número de tarjeta',
                        expiryPlaceholder: 'MM/AA',
                        cvcPlaceholder: 'COD',
                        zipPlaceholder: 'C.P.'
                    }}
                />}
                <div className={classes.checkout}>
        {this.state.error &&
        (<Typography component="span" color="error" className={classes.error}>
            <Icon color="error" className={classes.errorIcon}>error</Icon>
            {this.state.error}
        </Typography>)
        }
                    <Button color="secondary" variant="raised" onClick={this.placeOrder}
                            style={{float: 'right'}}>Comprar</Button>
      </div>
    </span>)
    }
}

PlaceOrder.propTypes = {
    classes: PropTypes.object.isRequired,
    checkoutDetails: PropTypes.object.isRequired
}

export default withStyles(styles)(PlaceOrder)
