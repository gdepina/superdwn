import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class Home extends Component {
  state={
    categories: []
  }
  componentDidMount = () => {
    listCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({categories: data})
      }
    })
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Grid spacing={24} style={{textAlign: 'center'}}>
          <Grid item xs={12} sm={12}>
            <Search categories={this.state.categories}/>
            {/*<Categories categories={this.state.categories}/>*/}
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
