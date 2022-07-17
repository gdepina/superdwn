import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import {FormControlLabel} from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import auth from './../auth/auth-helper'
import {read, update, createBankUserAccount, getBankAccount, registerPresentism} from './api-user.js'
import {Redirect} from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    title: {
        margin: theme.spacing.unit * 2,
        color: theme.palette.protectedTitle
    },
    error: {
        verticalAlign: 'middle'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    },
    subheading: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    }
})

class EditProfile extends Component {
    constructor({match}) {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            seller: false,
            employee: false,
            cuil: '',
            cbu: '',
            salary: '',
            redirectToProfile: false,
            error: ''
        }
        this.match = match
    }

    componentDidMount = () => {
        const jwt = auth.isAuthenticated()
        read({
            userId: this.match.params.userId
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({
                    name: data.name,
                    email: data.email,
                    seller: data.seller,
                    employee: data.employee,
                    cbu: data.cbu,
                    cuil: data.cuil,
                    salary: data.salary
                })
            }
        })
    }
    clickSubmit = () => {
        const user = auth.isAuthenticated().user;
        this.state.cuil && !this.state.cbu ? createBankUserAccount({
                cuil: this.state.cuil,
                name: this.state.name,
                email: this.state.email
            }).then(data => {
                registerPresentism({cuil: this.state.cuil}).then(data => {
                    console.log('Register employee success on presentism');
                })
                getBankAccount({cuil: this.state.cuil}).then(data => {
                    const account = data.filter(item => item.tipoCuenta === 'CAJA_AHORRO')[0];
                    this.setState({cbu: account.cbu}, this.editProfile)
                })
            })
            : this.editProfile();
    }

    editProfile = () => {
        const jwt = auth.isAuthenticated()
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined,
            seller: this.state.seller,
            employee: this.state.employee,
            cbu: this.state.cbu,
            cuil: this.state.cuil,
            salary: this.state.salary,
        }
        update({
            userId: this.match.params.userId
        }, {
            t: jwt.token
        }, user).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                auth.updateUser(data, () => {
                    this.setState({'userId': data._id, 'redirectToProfile': true})
                })
            }
        })
    }

    renderEmployee = () => {
        const {classes} = this.props
        return auth.isAuthenticated().user.employee && (
            <span><Typography type="subheading" component="h4" className={classes.subheading}>
            Empleado
        </Typography>
        <FormControlLabel
            control={
                <Switch classes={{
                    checked: classes.checked,
                    bar: classes.bar,
                }}
                        checked={this.state.employee}
                        onChange={this.handleCheckEmployee}
                />}
            label={this.state.employee ? 'Activo' : 'Inactivo'}
        /></span>)
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    handleCheck = (event, checked) => {
        this.setState({'seller': checked})
    }

    handleCheckEmployee = (event, checked) => {
        this.setState({'employee': checked})
    }

    render() {
        const {classes} = this.props
        if (this.state.redirectToProfile) {
            return (<Redirect to={'/user/' + this.state.userId}/>)
        }
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Editar perfil
                    </Typography>
                    <TextField id="name" label="Name" className={classes.textField} value={this.state.name}
                               onChange={this.handleChange('name')} margin="normal"/><br/>
                    <TextField id="email" type="email" label="Email" className={classes.textField}
                               value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" className={classes.textField}
                               value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
                    {this.state.employee && <TextField id="cuil" type="text" label="CUIL" className={classes.textField}
                                                       value={this.state.cuil} onChange={this.handleChange('cuil')}
                                                       margin="normal"/>}
                    {this.state.employee &&
                    <TextField disabled={true} id="cbu" type="text" label="CBU" className={classes.textField}
                               value={this.state.cbu} onChange={this.handleChange('cbu')} margin="normal"/>}
                    {/*{this.state.employee &&*/}
                    {/*<TextField disabled={!this.isSuperUser()} id="salary" type="text" label="Salario" className={classes.textField}*/}
                               {/*value={this.state.salary} onChange={this.handleChange('salary')} margin="normal"/>}*/}
                    <Typography type="subheading" component="h4" className={classes.subheading}>
                        Cuenta proveedor
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch classes={{
                                checked: classes.checked,
                                bar: classes.bar,
                            }}
                                    checked={this.state.seller}
                                    onChange={this.handleCheck}
                            />}
                        label={this.state.seller ? 'Activo' : 'Inactivo'}
                    />
                    {this.renderEmployee()}
                    <br/> {
                    this.state.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {this.state.error}
                    </Typography>)
                }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="raised" onClick={this.clickSubmit}
                            className={classes.submit}>Confirmar</Button>
                </CardActions>
            </Card>
        )
    }

    isSuperUser() {
        return auth.isAuthenticated().user.roles !== undefined && auth.isAuthenticated().user.roles.includes('super');
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditProfile)
