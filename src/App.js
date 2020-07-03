import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/common/Navbar'
import Menu from './components/inventory'
import Edit from './components/common/WelcomeMsg'
import Counter from './components/common/Counter'
import './App.css';

// useEffect(( => {
//  document.title = 
// })
    
function App() {
  return ( 
<Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/edit">
            <p>This is where we will edit our menu.</p>
              <Edit />
          </Route>
          <Route exact path="/">
            <h1>Welcome to Chinese Restaurant and {1+6} Bike Shop</h1>
             <Counter />

          </Route>
        </Switch>
      </div>
    </Router>


  )
}



export default App;

      