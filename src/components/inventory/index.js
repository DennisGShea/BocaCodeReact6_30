

import React, { Fragment } from 'react'
import Section from './Section'
import './inventory.css'
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
      .catch(err => console.log('Error fetching menfu: ' + err))
    // }, 6000)
    
  }
  render() {
    let { isLoaded, menu } = this.state
    return (
      <Fragment>
        <h1>Our Lucky #1 Menu</h1>
        {isLoaded
          ? menu.map((section, index) => {
            return (
              <Section
                key={index}
                items={section.items}
                name={section.category} />
            )
          })
          : <p>Fetching Lucky Menu...</p>
        }
      </ Fragment>
    )
  }
}
export default Menu







/*
import React,{Fragment} from 'react';
import Section from './Section' ;


let ourInventory = {
    appetizers: [{	
      name: 'Egg Rolls',
      price: 3.99,
      vegetarian: false
    }, {
      name: 'Spring Roll',
      price: 1.99,
      vegetarian: true
    }, {
      name: 'Spare Ribs',	
      price: 5.99,	
      vegetarian: false	
    }],	
    soups: [{	
      name: 'Egg Drop',	
      price: 3.99,	
      vegetarian: false	
    }, {	
      name: 'Wonton',	
      price: 3.99,	
      vegetarian: false	
    }, {	
      name: 'Vegetable',	
      price: 3.99,	
      vegetarian: true	
    }],	
    entrees: [{	
      name: 'Kung Pao Chicken',	
      price: 12.99,	
      vegetarian: false	
    }, {	
      name: 'Buddha\'s Delight',	
      price: 11.99,	
      vegetarian: true	
    }, {	
      name: 'General Tso Chicken',	
      price: 12.99,	
      vegetarian: false	
    }, {	
      name: 'Sesame Beef',	
      price: 14.99,	
      vegetarian: false	
    }]	
  }




function Menu(props) {
  let sections = Object.keys(ourInventory)
  console.log(sections)
  return (
      <Fragment>
          <h1>Our LuckBike Inventory</h1>
          {sections.map((section, index) => {
              return <Section name={section} items={ourInventory[section]} />
          })}
           
      </Fragment>

  )


        }

  export default Menu 
*/


