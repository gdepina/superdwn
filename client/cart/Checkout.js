import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import PlaceOrder from './PlaceOrder'

const styles = theme => ({
  card: {
    margin: '24px 0px',
    padding: '16px 40px 90px 40px',
    backgroundColor: '#80808017'
  },
  title: {
    margin: '24px 16px 8px 0px',
    color: theme.palette.openTitle
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.87)',
    marginTop: "20px",
  },
  addressField: {
    marginTop: "4px",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "45%"
  },
  streetField: {
    marginTop: "4px",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "93%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "90%"
  }
})

class Checkout extends Component {
  state = {
    checkoutDetails: {
      customer_name: '',
      customer_email:'',
      delivery_address: { street: '', city: '', state: '', zipcode: '', country:''}
    },
    error: ''
  }
  componentDidMount = () => {
    let user = auth.isAuthenticated().user
    let checkoutDetails = this.state.checkoutDetails
    checkoutDetails.products = cart.getCart()
    checkoutDetails.customer_name = user.name
    checkoutDetails.customer_email = user.email
    this.setState({checkoutDetails: checkoutDetails})
  }

  handleCustomerChange = name => event => {
    let checkoutDetails = this.state.checkoutDetails
    checkoutDetails[name] = event.target.value || undefined
    this.setState({checkoutDetails: checkoutDetails})
  }

  handleAddressChange = name => event => {
    let checkoutDetails = this.state.checkoutDetails
    checkoutDetails.delivery_address[name] = event.target.value || undefined
    this.setState({checkoutDetails: checkoutDetails})
  }

  render() {
    const {classes} = this.props
    return (
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Comprar
        </Typography>
        <TextField disabled id="name" label="Nombre" className={classes.textField} value={this.state.checkoutDetails.customer_name} onChange={this.handleCustomerChange('customer_name')} margin="normal"/><br/>
        <TextField disabled id="email" type="email" label="Email" className={classes.textField} value={this.state.checkoutDetails.customer_email} onChange={this.handleCustomerChange('customer_email')} margin="normal"/><br/>
        <Typography type="subheading" component="h3" className={classes.subheading}>
            ¿Donde lo enviamos?
        </Typography>
        <TextField id="street" label="Dirección" className={classes.streetField} value={this.state.checkoutDetails.delivery_address.street} onChange={this.handleAddressChange('street')} margin="normal"/><br/>
        <TextField id="city" label="Ciudad" className={classes.addressField} value={this.state.checkoutDetails.delivery_address.city} onChange={this.handleAddressChange('city')} margin="normal"/>
        <TextField id="state" label="Provincia" className={classes.addressField} value={this.state.checkoutDetails.delivery_address.state} onChange={this.handleAddressChange('state')} margin="normal"/><br/>
        <TextField id="zipcode" label="Código postal" className={classes.addressField} value={this.state.checkoutDetails.delivery_address.zipcode} onChange={this.handleAddressChange('zipcode')} margin="normal"/>
        <TextField id="country" label="Pais" className={classes.addressField} value={this.state.checkoutDetails.delivery_address.country} onChange={this.handleAddressChange('country')} margin="normal"/>
        <br/> {
            this.state.error && (<Typography component="p" color="error">
                <Icon color="error" className={classes.error}>error</Icon>
                {this.state.error}</Typography>)
          }
        <div>
            <PlaceOrder checkoutDetails={this.state.checkoutDetails} />
        </div>
      </Card>)
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Checkout)
