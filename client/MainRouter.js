import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Menu from './core/Menu'

class MainRouter extends Component {
    // Removes the server-side injected CSS when React component mounts
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        return (<div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={null}/>
            </Switch>
        </div>)
    }
}

export default MainRouter
