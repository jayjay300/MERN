import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import CreateShirt from "./components/create-shirt.component";
import EditShirt from "./components/edit-shirt.component";
import ShirtList from "./components/shirt-list.component";

class App extends Component{
render() {
  return (
    <Router>
    <div className="container">
    
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="http://mmntmr.com">
              <img src={logo} width="30" height="30" alt="http://mmntmr.com" />
            </a>
            <Link to="/" className="navbar-brand">Shirt List App</Link>
            
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Shirts</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">New Shirt</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
     

    <Route path="/" exact component={ShirtList} />
    <Route path="/edit/:id" component={EditShirt} />
    <Route path="/create" component={CreateShirt} />
        </div>
      </Router>
    );
  }
}

export default App;
