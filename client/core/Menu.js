import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import ExitToAppIcon from 'material-ui-icons/ExitToApp'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import Button from 'material-ui/Button'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'

const auth = {
    isAuthenticated: () => false,
}

const isActive = (history, path) => {
    if (history.location.pathname == path)
        return {color: '#1ADEE5'}
    else
        return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
    if (history.location.pathname.includes(path))
        return {color: '#1ADEE5'}
    else
        return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => (
    <AppBar position="static" style={{backgroundColor: '#7D2DEE', boxShadow: 'none'}}>
        <Toolbar>
            <Typography type="title" color="inherit">
                SUPERMERK2
            </Typography>
            <div style={{marginLeft: '10px'}}>
                <Link to="/">
                    <IconButton aria-label="Home" style={isActive(history, "/")}>
                        <HomeIcon/>
                    </IconButton>
                </Link>
                {/*<Link to="/shops/all">*/}
                {/*<Button style={isActive(history, "/shops/all")}>All Shops</Button>*/}
                {/*</Link>*/}
                <Link to="/cart">
                    <Button style={isActive(history, "/cart")}>
                        <Badge color="error" badgeContent={0}>
                            <CartIcon/>
                        </Badge>
                    </Button>
                </Link>
            </div>
            <div style={{'position': 'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
      {
          !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Registrarse
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Ingresar
            </Button>
          </Link>
        </span>)
      }
                {auth.isAuthenticated().user && auth.isAuthenticated().user.employee && <Link to="/reports">
                    <Button style={isActive(history, "/reports")}>Administración</Button>
                </Link>
                }
                {auth.isAuthenticated().user && auth.isAuthenticated().user.employee && <Link to="/shops/all">
                    <Button style={isActive(history, "/shops/all")}>Proveedores</Button>
                </Link>
                }
                {auth.isAuthenticated().user && auth.isAuthenticated().user.employee && <Link to="/users">
                    <Button style={isActive(history, "/users")}>Empleados</Button>
                </Link>
                }
                {
                    auth.isAuthenticated() && (<span>
          {auth.isAuthenticated().user.seller && (
              <Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>Tienda</Button></Link>)}
                        <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}><AccountCircleIcon/></Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.signout(() => history.push('/'))
          }}><ExitToAppIcon/> </Button>
        </span>)
                }
      </span></div>
        </Toolbar>
    </AppBar>
))

export default Menu
