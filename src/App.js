import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Index from "./components/Index";
import Order from "./components/Order/Order";
import { Provider } from "./context";
import Item_burger from "./components/ItemsMenu/Item_burger";
import Item_coffee from "./components/ItemsMenu/Item_coffee";
import Item_roll from "./components/ItemsMenu/Item_roll";
import Item_dessert from "./components/ItemsMenu/Item_dessert";
import Item_nuggets from "./components/ItemsMenu/Item_nuggets";
import Item_french_fries from "./components/ItemsMenu/Item_french_fries";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/burger' component={Item_burger} />
                <Route path='/coffee' component={Item_coffee} />
                <Route path='/roll' component={Item_roll} />
                <Route path='/dessert' component={Item_dessert} />
                <Route path='/nuggets' component={Item_nuggets} />
                <Route path='/order' component={Order} />
                <Route path='/french_fries' component={Item_french_fries} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
