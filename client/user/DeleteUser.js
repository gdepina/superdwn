import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import auth from './../auth/auth-helper'
import {remove} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'

class DeleteUser extends Component {
    state = {
        redirect: false,
        open: false
    }
    clickButton = () => {
        this.setState({open: true})
    }
    deleteAccount = () => {
        const jwt = auth.isAuthenticated()
        remove({
            userId: this.props.userId
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                !auth.isAuthenticated().user.employee && auth.signout(() => console.log('deleted'));
                this.setState({redirect: true})
            }
        })
    }
    handleRequestClose = () => {
        this.setState({open: false})
    }

    render() {
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to={auth.isAuthenticated().user.employee ? '/users' : '/'}/>
        }
        return (<span>
      <IconButton aria-label="Delete" onClick={this.clickButton} color={this.props.color || 'secondary'}>
        <DeleteIcon/>
      </IconButton>

      <Dialog open={this.state.open} onClose={this.handleRequestClose}>
        <DialogTitle>{"Eliminar cuenta"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirma para eliminar tu cuenta.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRequestClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={this.deleteAccount} color="secondary" autoFocus="autoFocus">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </span>)
    }
}

DeleteUser.propTypes = {
    userId: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default DeleteUser
