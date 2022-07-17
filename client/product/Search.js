import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'
import {list} from './api-product.js'
import Products from './Products'

const styles = theme => ({
  card: {
    margin: 'auto',
    textAlign: 'center'
  },
  menu: {
    width: 200
  },
  textField: {
    width: 230,
    verticalAlign: 'bottom',
    marginBottom: '15px'
  },
  searchField: {
    width: 300,
    marginBottom: '15px',
    marginLeft: '10px',
    marginRight: '10px'
  },
  searchButton: {
    minWidth: '20px',
    height: '30px',
    padding: '0 6px',
    backgroundColor: '#7D2DEE',
    borderRadius: '50px',
    color: '#fff'
  }
})

class Search extends Component {
  state = {
      category: '',
      search: '',
      results: [],
      searched: false
  }

  componentDidMount() {
      list({
          search: this.state.search || undefined, category: this.state.category
      }).then((data) => {
          if (data.error) {
              console.log(data.error)
          } else {
              this.setState({results: data, searched:true})
          }
      })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  search = () => {
      list({
        search: this.state.search || undefined, category: this.state.category
      }).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          this.setState({results: data, searched:true})
        }
      })
  }
  enterKey = (event) => {
    if(event.keyCode == 13){
      event.preventDefault()
      this.search()
    }
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <Card className={classes.card}>
          <TextField
            id="select-category"
            select
            label="Elige categoria"
            className={classes.textField}
            value={this.state.category}
            onChange={this.handleChange('category')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal">
            <MenuItem value="All">
              All
            </MenuItem>
            { this.props.categories.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="search"
            label="Busca lo que necesites..."
            type="search"
            onKeyDown={this.enterKey}
            onChange={this.handleChange('search')}
            className={classes.searchField}
            margin="normal"
          />
          <Button className={classes.searchButton} onClick={this.search}>
            <SearchIcon/>
          </Button>
          <Divider/>
          <Products products={this.state.results} searched={this.state.searched}/>
        </Card>
      </div>
    )
  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

export default withStyles(styles)(Search)
