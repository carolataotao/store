
import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import ReactSVG from 'react-svg';



/*function App() {
  return (
    
  );
*/

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal></Modal>
        
      </React.Fragment>);
      /* (
      <div className="container">
        <div className="row">
          <div className="col-6">column number one</div>
          <div className="col-6"><span><i className="fas fa-home" /></span></div>
        </div>
      </div>
    ); */
   
  }
}

export default App;
