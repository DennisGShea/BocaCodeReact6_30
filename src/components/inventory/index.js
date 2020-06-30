


import React,{Fragment} from 'react';
import Section from './Section'

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
              return <Section name={section} />
          })}
           
      </Fragment>

  )


        }

  export default Menu 



