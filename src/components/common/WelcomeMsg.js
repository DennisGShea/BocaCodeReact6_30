
import React, { Component } from 'react'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { name:'', movies:[]}
    this.handleChange = this.handleChange.bind(this)

    }

handleChange(event)  {
    this.setState({name: event.target.value })
}

componentDidMount(){
  fetch('https://sampleapis.com/movies/api/drama')
      .then((response) => response.json())
      .then((data) => {
        this.setState({movies: data})  
        
        
        console.log(data)})

}    


  render() {
    return (
      <form>
          <label>
              Name:
              <input type="text"  value = {this.state.name}
onChange={this.handleChange} />
          </label>
          <h2>
          Hello!!!  {/*} put bak conditional {this.state.name}; */}
             if this.state.movies (this.state.movies[4].title
          </h2>
           
      </form>
         
       )
  }
}

export default Edit


//{Hello!!! put bak conditional {this.state.name};

//{ if this.state.movies (this.state.movies[4].title}
/*
const API_URL = 'https://restaurant-api-js01lc-app.ue.r.appspot.com'
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      menu: []
    }
  }
  componentDidMount() {
    // setTimeout(() => {
    fetch(API_URL + '/menu')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isLoaded: true, menu: data })
      })
      .catch(err => console.log('Error fetching menu: ' + err))
    // }, 6000)
  }
  */ 