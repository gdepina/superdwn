import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import {list, getPresentismByEmployee, getPresentism} from './api-reports.js'
import Table from 'material-ui/Table/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';
import sortBy from 'lodash.sortby';
import groupBy from 'lodash.groupby';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'
import Snackbar from 'material-ui/Snackbar/Snackbar';
import SnackbarContent from 'material-ui/Snackbar/SnackbarContent';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import CloseIcon from 'material-ui-icons/Close';
import clsx from 'clsx';
import IconButton from 'material-ui/IconButton'


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        display: 'flex',
        overflowX: 'auto',
        flexWrap: 'wrap',
        marginRight: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 3
    },
    table: {
        width: '50%',
        margin: '24px'
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
        color: theme.palette.openTitle
    },
    productTitle: {
        fontSize: '1.70em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '0 auto',
        width: '115px'
    },
    button: {
        //margin: theme.spacing.unit,
        padding: '25px',
        fontSize: '24px',
    },
    totals: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '0 auto',
    },
    success: {
        backgroundColor: '#4CAF50',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit * 3,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});


class Reports extends Component {
    state = {
        items: [],
        open: false,
        employees: [],
    }

    componentDidMount() {
        list().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                // const payeds = data.filter(item => item._id.payment_status = 'Pagado');
                const byStatus = groupBy(data, '_id.payment_status');
                const totalPayed = 'Pagado' in byStatus && byStatus.Pagado.reduce((a, b) => {
                    return a + (b.totalPrice)
                }, 0);

                const totalPending = 'Pendiente' in byStatus && byStatus.Pendiente.reduce((a, b) => {
                    return a + (b.totalPrice)
                }, 0);

                this.setState({
                    items: sortBy(data, [function (o) {
                        return o._id.payment_status;
                    }]),
                    totalPayed,
                    totalPending
                }, this.setPresentism)
            }
        })
    }

    setPresentism = () => {
        getPresentism((employees) => this.setState({ employees }))
    }

    handleClick = () => {
        getPresentismByEmployee(this.onSuccess);
    }

    onSuccess = (reason) => {
        this.setState({open: true, reason: reason});
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false});
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography type="title" component="h3" className={classes.productTitle}
                                color="primary">Facturación</Typography>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Metodo de pago</CustomTableCell>
                                <CustomTableCell>Estado</CustomTableCell>
                                <CustomTableCell numeric>Total</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.items.map(n => {
                                return (
                                    <TableRow className={classes.row} key={n.id}>
                                        <CustomTableCell component="th" scope="row">
                                            {n._id.payment_method}
                                        </CustomTableCell>
                                        <CustomTableCell>{n._id.payment_status}</CustomTableCell>
                                        <CustomTableCell numeric>$ {n.totalPrice}</CustomTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <div className={classes.totals}>
                        <Button variant="raised" color="primary" className={classes.button}
                                style={{backgroundColor: '#4caf50'}}>
                            Cobrado $ {this.state.totalPayed}
                        </Button>
                        {this.state.totalPending && <Button variant="raised" color="primary" className={classes.button}
                                style={{backgroundColor: '#FFC107'}}>
                            Por cobrar $ {this.state.totalPending}
                        </Button>}
                    </div>
                </Paper>
                <Paper className={classes.root}>
                    <Typography type="title" component="h3" className={classes.productTitle}
                                color="primary">Asistencias y sueldos</Typography>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Empleado</CustomTableCell>
                                <CustomTableCell numeric >Horas trabajadas</CustomTableCell>
                                <CustomTableCell numeric >Ausentes</CustomTableCell>
                                <CustomTableCell numeric >A pagar</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.employees.map(n => {
                                return (
                                    <TableRow className={classes.row}>
                                        <CustomTableCell component="th" scope="row">
                                            {n.name}
                                        </CustomTableCell>
                                        <CustomTableCell numeric>{n.hours}</CustomTableCell>
                                        <CustomTableCell numeric>{n.aus}</CustomTableCell>
                                        <CustomTableCell numeric>$ {n.amount}</CustomTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <div className={classes.totals}>
                        <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick}
                                style={{backgroundColor: '#2196F3'}}>
                            Pagar sueldos
                        </Button>
                    </div>
                </Paper>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <SnackbarContent
                        onClose={this.handleClose}
                        className={classes.success}
                        message={
                            <span id="client-snackbar" className={classes.message}>
                              <CheckCircleIcon className={clsx(classes.icon, classes.iconVariant)}/>
                                Los pagos se realizaron con exito.
                            </span>
                        }
                        action={[
                            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon className={classes.icon}/>
                            </IconButton>,
                        ]}
                    />
                </Snackbar>
            </React.Fragment>
        );
    }
}

Reports.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Reports)

